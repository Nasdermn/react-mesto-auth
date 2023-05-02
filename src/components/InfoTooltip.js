import successImg from "../images/success.svg";
import failureImg from "../images/failure.svg";

function InfoTooltip({ isOpen, onClose, status }) {
  return (
    <div className={`info-tooltip ${isOpen ? "info-tooltip_opened" : ""}`}>
      <div className="info-tooltip__container">
        <button
          type="button"
          className="info-tooltip__close"
          onClick={onClose}
        />
        <img
          src={status ? successImg : failureImg}
          className="info-tooltip__img"
          alt="Иконка"
        ></img>
        <p className="info-tooltip__text">
          {status
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте ещё раз."}
        </p>
      </div>
    </div>
  );
}

export default InfoTooltip;
