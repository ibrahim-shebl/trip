import "./ContactFormStyles.css";

function ContactForm() {
  return (
    <div className="from-container">
      <h1>Send A Message To Us!</h1>
      <form>
        <input placeholder="name" />
        <input placeholder="Email" />
        <input placeholder="Subject" />
        <textarea placeholder="Message" rows="4"></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;
