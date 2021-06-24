import * as React from 'react';
import {
  GridColumnMenuSort,
  GridColumnMenuFilter, GridColumnMenuItemGroup, GridColumnMenuItem, GridColumnMenuItemContent
} from '@progress/kendo-react-grid';

export class CustomColumnMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: this.props.columns,
      columnsExpanded: false,
      filterExpanded: false
    };
  }

  onToggleColumn = (id) => {
    this.setState({
      columns: this.state.columns.map((column, idx) => {
        return idx === id ? { ...column, show: !column.show } : column;
      })
    });
  }

  onReset = (event) => {
    event.preventDefault();
    const allColumns = this.props.columns.map(col => {
      return {
        ...col,
        show: true
      };
    });

    this.setState({ columns: allColumns }, () => this.onSubmit());
  }

  onSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    this.props.onColumnsSubmit(this.state.columns);
    this.props.setColumns(this.state.columns)

    if (this.props.onCloseMenu) {
      this.props.onCloseMenu();
    }
  }

  onMenuItemClick = () => {
    const value = !this.state.columnsExpanded;
    this.setState({
      columnsExpanded: value,
      filterExpanded: value ? false : this.state.filterExpanded
    });
  }

  onFilterExpandChange = (value) => {
    this.setState({
      filterExpanded: value,
      columnsExpanded: value ? false : this.state.columnsExpanded
    });
  }

  render() {
    const oneVisibleColumn = this.state.columns.filter(c => c.show).length === 1;
    return (
      <div>
        <GridColumnMenuSort {...this.props} />
        <GridColumnMenuFilter
          {...this.props}
          onExpandChange={this.onFilterExpandChange}
          expanded={this.state.filterExpanded}
        />
      </div>
    );
  }
}
