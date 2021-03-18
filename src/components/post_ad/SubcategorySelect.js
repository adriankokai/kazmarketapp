import React, { Component } from "react";
import M from "materialize-css";
import { connect } from "react-redux";
import { changeSelect } from "../../store/actions/changeSelect";

class SubcategorySelect extends Component {
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
        <h5>sub-category</h5>
        <select
          ref={FormSelect => {
            this.FormSelect = FormSelect;
          }}
          name="subcategory"
          onChange={this.handleChange}
        >
          <option value={null} disabled defaultValue>select option</option>
          <option >
            {this.props.value || this.props.newValue}
          </option>
          {
            Array.isArray(this.props.subcategories) ?

            this.props.subcategories.map(subcategory => (
              <option value={subcategory.id}>{subcategory.name} </option>
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
    newValue: state.changeSelect.selectValue
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChangeSelect: value => dispatch(changeSelect(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubcategorySelect);