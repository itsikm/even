import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    Input,
    Button,
    Checkbox,
    DropDown
} from '../../components/FormElements';
import GitHubApi from '../../helpers/github';
import { GITHUB_API, SEARCH_RULES } from '../../config';
import { SEARCH_ERROR } from '../../constants';
import { search } from '../../store';
import './SearchForm.scss';

/**
 * Search Form Container
 */
class SearchForm extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
    };

    /**
     * Constructor
     * @param {Object} props
     */
    constructor(props) {
        super(props);

        this.api = new GitHubApi(GITHUB_API);
        this.state = {
            query: {
                text: '',
                stars: '<500',
                license: 'mit',
                fork: false
            },
            errors: {
                search: null,
                stars: null
            },
            disabled: false,
            licenses: []
        };
    }

    /**
     * Component Did Mount
     */
    componentDidMount() {
        this.api.licenses().then((licenses) => this.setState({ licenses }));
    }

    /**
     * Handle Input Change
     * @param {Object} event
     */
    handleChange = (event) => {
        this.setState({
            query: {
                ...this.state.query,
                [event.target.name]: event.target.value
            }
        });
    };

    /**
     * Handle Checkbox Change
     * @param {Object} event
     */
    handleCheckbox = (event) => {
        this.setState({
            query: {
                ...this.state.query,
                [event.target.name]: event.target.checked
            }
        });
    };

    /**
     * Query params validation
     * @returns {boolean}
     */
    validation = () => {
        // check for search rules for stars input using regex
        if (this.state.query.stars !== '' && !SEARCH_RULES.test(this.state.query.stars)) {
            this.setState({
                errors: {
                    ...this.state.errors,
                    stars: SEARCH_ERROR
                }
            });
            return false;
        }

        // reset errors
        this.setState({ errors: {} });
        return true;
    };

    /**
     * Search Action
     */
    search = () => {
        // if not valid break
        if (!this.validation()) return;

        // valid, execute search
        this.setState({ disabled: true });
        this.api.search(this.state.query).then((data) => {
            if (data.errors) {
                this.setState({
                    errors: {
                        ...this.state.errors,
                        search: data.errors[0].message
                    }
                });
                return;
            }
            this.props.dispatch(search(data.items));
            this.setState({ disabled: false });
        });
    };

    render() {
        const { licenses, disabled } = this.state;
        const { text, stars, license } = this.state.query;
        const { stars: starsError, search: searchError } = this.state.errors;

        return (
            <div className="search-form">
                <div className="form-error">{searchError}</div>
                <div className="grid">
                    <Input label="Text" value={text} name="text" onChange={this.handleChange} disabled={disabled} />
                    <DropDown label="License"
                              name="license"
                              options={licenses}
                              selected={license}
                              value="key"
                              text="name"
                              onChange={this.handleChange}
                              disabled={disabled}
                    />
                    <Input label="Stars"
                           value={stars}
                           name="stars"
                           onChange={this.handleChange}
                           disabled={disabled}
                           error={starsError}
                    />
                    <div className="no-label">
                        <Checkbox name="fork" onChange={this.handleCheckbox} disabled={disabled}>Include Forks</Checkbox>
                    </div>
                </div>
                <div className="actions">
                    <Button onClick={this.search} disabled={disabled}>Search</Button>
                </div>
            </div>
        );
    }
}

/**
 * Connect with Redux
 */
export default connect()(SearchForm);
