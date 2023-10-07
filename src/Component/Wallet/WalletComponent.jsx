import React from "react";
import "./Wallet.css";

import WalletSystem from "./WalletSystem";
import RewardSystem from "./RewardSystem";
import Search from "../../Assets/transSearch.svg";
import Calendar from "../../Assets/calendar.svg";
import Arrow from "../../Assets/arrowTrans.svg";
import Data from "../../Data.json";
const WalletComponent = ({response}) => {
 
  
  const [currentPage, setCurrentPage] = React.useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const currentRecords = response && response.transactions.slice(firstIndex, lastIndex);
  console.log(currentRecords);

  
  const npage = response && Math.ceil(response.transactions.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  function paginate(n) {
    setCurrentPage(n);
  }
  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage((currentPage) => currentPage + 1);
    }
  }
  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage((currentPage) => currentPage - 1);
    }
  }

  return (
    <div className="wallet-cover">
      <div className="wallet-title">
        <p>Your Wallet</p>
      </div>
      <div className="system-flex">
        <WalletSystem title={"Your CK Points"} value={response.points} type={"CK"} />
        <WalletSystem title={"Your Money"} value={2300} type={"INR"} />
        <RewardSystem title={"Reward System"} />
      </div>

      <div className="transaction-cover">
        <div className="trans-flex">
          <h1>Transaction History</h1>
          <div>
            <img src={Search} alt="" className="search-trans" />
            <input
              type="text"
              className="transaction-search"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="trans-bar">
          <div className="trans-options">
            <div className="option">
              <p>All</p>
            </div>
            <div className="option">
              <p>CK Points</p>
            </div>
            <div className="option">
              <p>Money</p>
            </div>
            <div className="option">
              <p>Received</p>
            </div>
            <div className="option">
              <p>Sent</p>
            </div>
            <div className="option">
              <p>Withdraw</p>
            </div>
          </div>
          <div className="right-option-cover">
            <div className="right-option">
              <img src={Calendar} alt="" />
              <p>Past 90 Days</p>
              <img src={Arrow} alt="" />
            </div>
          </div>
        </div>
        <div className="history-cover">
          <div className="trans-history">
            <h6>Date</h6>
            {response && currentRecords.map((record) => (
              <p></p>
            ))}
          </div>
          <div className="trans-history">
            <h6>Name</h6>
            {response && currentRecords.map((record) => (
              <p></p>
            ))}
          </div>
          <div className="trans-history">
            <h6>Transaction ID</h6>
            {response && currentRecords.map((record) => (
              <p>{record._id}</p>
            ))}
          </div>
          <div className="trans-history">
            <h6>Amount</h6>
            {response && currentRecords.map((record) => (
              <p>{record.amount}.00 INR</p>
            ))}
          </div>
          <div className="trans-history">
            <h6>Type</h6>
            {response && currentRecords.map((record) => (
              <p>{record.type}</p>
            ))}
            
          </div>
          <div className="trans-history">
            <h6>Status</h6>
            {response && currentRecords.map((record) => (
              <p>success</p>
            ))}
          </div>
        </div>
        <nav className="history-paginate">
          <ul className="pagination">
            <div className="page-item">
              <a href="#" className="page-link" onClick={prePage}>
                <button>Prev</button>
              </a>
            </div>
            {numbers.map((number) => (
              <div
                className={`page-item ${
                  currentPage === number ? "more" : ""
                } `}
                key={number}
              >
                <a
                  href="#"
                  className="page-link"
                  onClick={() => paginate(number)}
                >
                  {number}
                </a>
              </div>
            ))}
            <div className="page-item">
              <a href="#" className="page-link" onClick={nextPage}>
                <button>Next</button>
              </a>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default WalletComponent;
