import * as React from "react";

export default class HotelList extends React.Component {
  static propTypes = {
    hotels: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  renderHotel = hotel => {
    return (
      <div class="HotelList__hotel">
        {hotel.name}
        {hotel.price}
      </div>
    );
  };

  render() {
    return (
      <div className="HotelList">{this.props.hotels.map(this.renderHotel)}</div>
    );
  }
}
