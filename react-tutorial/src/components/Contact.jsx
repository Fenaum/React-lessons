export default function Contact({img, name, phone, email}) {
    return (
      <div className="contacts">
        <div className="contact-card">
          <img src={img}></img>
          <h3>{name}</h3>
          <div className="info-group">
            <img src="./src/assets/images/phone-icon.png" />
            <p>{phone}</p>
          </div>
          <div className="info-group">
            <img src="./src/assets/images/mail-icon.png" />
            <p>{email}</p>
          </div>
        </div>
      </div>
    );
};
