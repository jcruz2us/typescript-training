import * as React from "react";

interface IHotelResponse {
  name: string;
  address: string;
  city_name: string;
  stars: number;
}

interface IProps {
  hotels: IHotelResponse[];
  onItemClick: (index: number) => void;
}

// interface IAppState {
// }

export default class HotelList extends React.Component<IProps> {
  public static defaultProps = {
    hotels: [{ name: "", address: "", city_name: "", stars: 1 }],
  };

  public state = {};

  public render() {
    return (
      <div className="HotelList">{this.props.hotels.map(this.renderHotel)}</div>
    );
  }

  private handleClick = (index: number) => {
    this.props.onItemClick(index);
  };

  private renderHotel = (hotel: IHotelResponse, index: number) => {
    return (
      <div
        className="HotelList__hotel"
        onClick={this.handleClick.apply(this, index)}
      >
        {hotel.name}
      </div>
    );
  };

  // click event to show callbacks
}

// talk about where to store types
// union types
// ?, any, !
// ?, show case where assumption is made where it fails
// any, convert null to any
//
