import "./register.css";
const Register = (props) => {
    const showRegister = props.setShowRegister
    const showSignIn = props.setShowSignIn
    const handleClick = ()=>{
        showRegister(false)
        showSignIn(true)
    }
  return (
    <div className="register-wrapper">
      <div className="register-header">რეგისტრაცია</div>
      <div className="register-text">
        ძალიან გვიხარია, შენი შემოერთება, შევეცდებით დაუვიწყარი გამოცდილება
        შემოგთავაზოთ
      </div>
      <div className="register-inputs">
        <div className="input-combo">
          <label for="name">სახელი</label>
          <input type="text" id="name" />
        </div>
        <div className="input-combo">
          <label for="surname">გვარი</label>
          <input type="text" id="surname" />
        </div>
        <div className="input-combo input-full">
          <label for="email">უნივერსიტეტის ელ-ფოსტა</label>
          <input type="email" id="email"></input>
        </div>
        <div className="input-combo input-full">
          <label for="phone">მობილური</label>
          <input type="phone" id="phone"></input>
        </div>
        <div className="input-combo">
          <label for="input-text">მოგვწერეთ რაზე გსურთ ფასდაკლება</label>
          <textarea name="input-text" id="input-text"></textarea>
        </div>
        <div className="register-footer">
          <div className="register-checkboxes">
              <input type='checkbox'></input>
              ვეთანხმები წესებს და პირობებს
          </div>
          <div className="register-button">
            <button>შესვლა</button>
          </div>
          <div className="register-goBack">
            გაქვს ექაუნთი? <button onClick={handleClick}>Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
