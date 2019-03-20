import React, { Component } from "react";
import { callApi } from "../api";

class Bookings extends Component {
  state = {
    bookings: []
  };

  async componentDidMount() {
    const response = await callApi(
      "/bookings/?include=provider,client,service,schedule&branch=72&date=2019-01-04"
    );
    // const response = await fetch(
    //   "https://staging.baseup.me/api/v1/bookings/?include=provider,client,service,schedule&branch=72&date=2019-01-04",
    //   {
    //     headers: {
    //       Authorization: "Bearer fK7b5SMtD5yuSokIyiR8vC981rmfGg",
    //       "Content-Type": "application/vnd.api+json"
    //     }
    //   }
    // );
    if (Array.isArray(response.data)) {
      this.setState({ bookings: response.data });
    }
  }

  render() {
    const { bookings } = this.state;
    return (
      <>
        <h3>Bookings: {bookings.length}</h3>
        <ul>
          {bookings.map(b => (
            <li key={b.id}>
              {b.id} - {b.attributes.time_start}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Bookings;

// GET /api/v1/bookings/?include=provider,client,service,schedule&amp; branch=72&amp; date=2019-01-04 HTTP/1.1
// Host: staging.baseup.me
// Content-Type: application/vnd.api+json
// Authorization: Bearer lb78JhO99x09Z5xIGFEPXpfHUNuv6p
// cache-control: no-cache
// Postman-Token: 7a96eefa-aec9-4133-a8fd-d768961a5755

// {"links":{"first":"https://staging.baseup.me/api/v1/bookings/?branch=72&date=2019-01-04&include=provider%2Cclient%2Cservice%2Cschedule&page=1","last":"https://staging.baseup.me/api/v1/bookings/?branch=72&date=2019-01-04&include=provider%2Cclient%2Cservice%2Cschedule&page=1","next":null,"prev":null},"data":[{"type":"bookings","id":"65527","attributes":{"status":"F","metadata":{"checkout":{"note":"","coupon":"","discount":null,"sub_total":300,"grand_total":300,"service_cost":[{"cost":"300.00","service_id":"785"}],"discount_note":"","discount_type":0,"payment_option":"Card","additional_services":[]},"no_preference":false,"booking_created_by":"admin","special_instructions":""},"time_start":"14:00:00","padding":"00:15:00","account":{"id":2,"name":"Felipe and Sons","slug":"felipeandsons"}},"relationships":{"branch":{"data":{"type":"branches","id":"72"}},"client":{"data":null},"provider":{"data":{"type":"users","id":"13368"}},"schedule":{"data":{"type":"schedules","id":"6102"}},"service":{"data":{"type":"services","id":"785"}}}},{"type":"bookings","id":"65528","attributes":{"status":"P","metadata":{"checkout":{"sub_total":0,"grand_total":0,"service_cost":"0.00","additional_services":[]},"no_preference":true,"booking_created_by":"admin","special_instructions":""},"time_start":"15:00:00","padding":"00:15:00","account":{"id":2,"name":"Felipe and Sons","slug":"felipeandsons"}},"relationships":{"branch":{"data":{"type":"branches","id":"72"}},"client":{"data":{"type":"users","id":"15599"}},"provider":{"data":{"type":"users","id":"13368"}},"schedule":{"data":{"type":"schedules","id":"6102"}},"service":{"data":{"type":"services","id":"359"}}}}],"included":[{"type":"schedules","id":"6102","attributes":{"date":"2019-01-04","time_open":"00:00:00","time_close":"23:59:00"},"relationships":{"branch":{"data":{"type":"branches","id":"72"}}}},{"type":"services","id":"359","attributes":{"name":"Consult","description":null,"cost":"0.00","duration":"00:30:00","max_customer":1,"is_online":true},"relationships":{"branch":{"data":{"type":"branches","id":"72"}}}},{"type":"services","id":"785","attributes":{"name":"Haircut","description":"test","cost":"300.00","duration":"00:30:00","max_customer":1,"is_online":true},"relationships":{"branch":{"data":{"type":"branches","id":"72"}}}},{"type":"users","id":"13368","attributes":{"first_name":"Edward","last_name":"G","email":null,"address":null,"city":null,"country":null,"province":null,"postal_code":null,"gender":null,"birthdate":null,"is_guest":false,"is_admin":false,"is_superuser":false,"timezone":null,"phone":null,"alt_phone":null,"status":"A","photo":"/uploads/20180607020407d0694f7ebe5f4018ae0e0d0bd99491d2.png","is_active":false,"is_mobile_activated":false,"metadata":{"provider_metadata":{"status":"A","deleted":false,"is_test":false,"create_at":"2016-12-02T18:25:02.839","update_at":"2016-12-15T11:28:50.231","profile_pic":"assets/uploads/2/provider/201612151125533d0767285f93460a823ab17ef892dbe3.jpg"}},"create_at":"2018-05-03T05:32:12.241037Z","update_at":"2019-01-31T01:46:44.317624Z","social_id":null,"contact_name":null}},{"type":"users","id":"15599","attributes":{"first_name":"Mark","last_name":"Sy","email":null,"address":null,"city":null,"country":null,"province":null,"postal_code":null,"gender":null,"birthdate":null,"is_guest":false,"is_admin":false,"is_superuser":false,"timezone":null,"phone":"9194322442","alt_phone":null,"status":"A","photo":null,"is_active":false,"is_mobile_activated":false,"metadata":{"notification":"phone"},"create_at":"2019-01-04T03:42:57.841842Z","update_at":"2019-01-04T03:42:58.777778Z","social_id":null,"contact_name":null}}],"meta":{"pagination":{"page":1,"pages":1,"count":2}}}
