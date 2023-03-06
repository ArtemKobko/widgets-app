import React, { Component } from 'react';
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from '@mui/material';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeCity } from '../../models/widgets/actions';

class SelectAutoWidth extends Component {
  constructor(props) {
    super(props);
    const { defaultCity } = this.props;
    this.state = {
      city: defaultCity,
    };
  }

  handleChange = (event) => {
    const { dispatch } = this.props;
    const { id } = this.props;
    this.setState({ city: event.target.value }, () => dispatch(changeCity(id, event.target.value)));
  };

  render() {
    const { city } = this.state;
    return (
      <div>
        <FormControl sx={{ m: 1, minWidth: 80, padding: 0 }}>
          <InputLabel sx={{ color: '#fbf8f8', fontSize: 'calc(0.4em + 0.7vw)', padding: 0 }} id="demo-simple-select-autowidth-label">City</InputLabel>
          <Select
            sx={{
              boxShadow: 'none',
              '.MuiOutlinedInput-notchedOutline': { border: 0 },
              color: '#fbf8f8',
              fontSize: 'calc(0.5em + 0.5vw)',
              padding: 0,
            }}
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            defaultValue={city}
            value={city}
            onChange={this.handleChange}
            autoWidth
            label="City"
          >
            <MenuItem value="Warsaw">Warsaw/Poland</MenuItem>
            <MenuItem value="London">London/UK</MenuItem>
            <MenuItem value="Kyiv">Kyiv/Ukraine</MenuItem>
            <MenuItem value="Tokyo">Tokyo/Japan</MenuItem>
            <MenuItem value="Yerevan">Yerevan/Armenia</MenuItem>
            <MenuItem value="Nairobi">Nairobi/Kenia</MenuItem>
            <MenuItem value="Cairo">Cairo/Egypt</MenuItem>
            <MenuItem value="Sydney">Sydney/Australia</MenuItem>
            <MenuItem value="Havana">Havana/Cuba</MenuItem>
            <MenuItem value="Lima">Lima/Peru</MenuItem>
            <MenuItem value="Toronto">Toronto/Canada</MenuItem>
            <MenuItem value="Chicago">Chicago/USA</MenuItem>
          </Select>
        </FormControl>
      </div>
    );
  }
}
SelectAutoWidth.propTypes = {
  dispatch: PropTypes.func.isRequired,
  defaultCity: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default connect()(SelectAutoWidth);
