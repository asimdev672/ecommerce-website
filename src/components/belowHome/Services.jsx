import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
const Services = () => {
  return (
    <>
      <div className="Services--main pt-5 mt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row row-cols-lg-3 row-cols-1">
                <div className="col">
                  <div className="services_card" >
                    <TbTruckDelivery className="s-icon" />
                    <h6 className="text-capitalize">
                      Super fast and free delivery
                    </h6>
                  </div>
                </div>
                <div className="col">
                  <div className="services_cards d-flex flex-column">
                    <div className="s1">
                      <GiReceiveMoney className="s-icon" />{" "}
                      <h6 className="text-capitalize">non-contact shipping</h6>
                    </div>
                    <div className="s2">
                      <RiSecurePaymentLine className="s-icon" />{" "}
                      <h6 className="text-capitalize">money-back guranteed</h6>
                    </div>
                    <div></div>
                  </div>
                </div>
                <div className="col">
                  <div className="services_card">
                    <RiSecurePaymentLine className="s-icon" />
                    <h6 className="text-capitalize">
                      Super secure payment system
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
