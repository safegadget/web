import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaSpinner } from "react-icons/fa"; // Loader spinner
import "./SubscribeModal.css";
import { FaCircleCheck } from "react-icons/fa6";

type SubscribeModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const SubscribeModal: React.FC<SubscribeModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false); // State for loading spinner
  const [success, setSuccess] = useState(false); // State for successful submission

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Start loading

    // Simulate a loading time
    setTimeout(() => {
      setLoading(false); // Stop loading
      setSuccess(true); // Show success message
    }, 700); // 60 seconds for loader
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content slide-in">
        {/* Close icon at the top */}
        <div className="close-icon" onClick={onClose}>
          <AiOutlineClose size={16} />
        </div>

        {/* Loader spinner or form */}
        {loading ? (
          <div className="loader">
            <FaSpinner className="spinner" size={24} />
            <p>Adding to waitlist...</p>
          </div>
        ) : success ? (
          <div className="success-message">
            <FaCircleCheck className="check-icon" size={40} />
            <h2 className="success-message-h2">
              Successfully added to waitlist!
            </h2>
            <p className="success-message-p"> Added to the waitlist</p>
          </div>
        ) : (
          <div>
            <h2>Subscribe to our waiting list</h2>
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="submit-btn">
                Subscribe
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubscribeModal;
