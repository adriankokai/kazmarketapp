import React, { Component } from "react";
import M from "materialize-css";
import { connect } from "react-redux";
import { changeSelect } from "../../store/actions/changeSelect";

class CategorySelect extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    M.FormSelect.init(this.FormSelect);
  }

  handleChange(e) {
    this.props.onChangeSelect(e.target.value);
    this.props.handleChange(e);
  };

  render() {
    return (
      <div className="input-field col s9">
        <select
          ref={FormSelect => {
            this.FormSelect = FormSelect;
          }}
          name="category"
          onChange={this.handleChange}
        >
          <option value={null} disabled defaultValue>select option</option>
          <option >
            {this.props.value || this.props.newValue}
          </option>
          {
            Array.isArray(this.props.categories) ?

            this.props.categories.map(category => (
              <option value={category.id}>{category.name} </option>
            ))

            :

            null
          }
        </select>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    newValue: state.changeSelect.selectValue,
    categories: state.fetchCategories.categories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChangeSelect: value => dispatch(changeSelect(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategorySelect);