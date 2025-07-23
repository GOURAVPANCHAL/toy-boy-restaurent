import React from "react";

const Reservation = () => {
  return (
    <>
      <section className="reservation">
        <div className="reservationOverlay">
          <div className="container">
            <div className="row">
              <div className="col-md-7"></div>
              <div className="col-md-5">
                <div className="reservationContent">
                  <h6>We've Reserved Your Spot!</h6>
                  <h1>Make Your Reservation Online</h1>
                  <p>
                  When the groove calls, we deliver with the hottest beats, best vibes and the best cuisine. Get ready for an unmatched experience!
                  </p>
                  {/* <!-- Reservation Button --> */}
                  <button
                    className="overmenu"
                    data-bs-toggle="modal"
                    data-bs-target="#reservationModal"
                  >
                    RESERVATION
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Reservation Modal --> */}
        <div
          className="modal fade"
          id="reservationModal"
          tabIndex="-1"
          aria-labelledby="reservationModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content custom-modal">
              <div className="modal-header">
                <h1
                  className="modal-title text-white text-center"
                  id="reservationModalLabel"
                >
                  Make a Reservation
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {/* <!-- Reservation Form --> */}
                <form>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control custom-input"
                        id="name"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="phone" className="form-label">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="form-control custom-input"
                        id="phone"
                        required
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control custom-input"
                        id="email"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="date" className="form-label">
                        Date
                      </label>
                      <input
                        type="date"
                        className="form-control custom-input"
                        id="date"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="location" className="form-label">
                      Location
                    </label>
                    <input
                      type="text"
                      className="form-control custom-input"
                      id="location"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="specialRequest" className="form-label">
                      Special Request
                    </label>
                    <textarea
                      className="form-control custom-input"
                      id="specialRequest"
                      rows="3"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reservation;
