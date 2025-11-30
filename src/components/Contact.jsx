/**
 * Composant Contact
 * Section de contact avec informations de contact
 */
import '../styles/Contact.css'

function Contact() {
  // Informations de contact de Xavier FAVÉ
  const contactInfo = {
    email: "xav.fave@gmail.com",
    telephone: "+33 7 87 87 80 95",
    localisation: "Lannion, France"
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">
          N'hésitez pas à me contacter pour toute opportunité ou question
        </p>
        
        <div className="contact-content">
          {/* Informations de contact */}
          <div className="contact-info">
            <h3>Informations de contact</h3>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <strong>Email</strong>
                  <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <div>
                  <strong>Téléphone</strong>
                  <a href={`tel:${contactInfo.telephone}`}>{contactInfo.telephone}</a>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <strong>Localisation</strong>
                  <span>{contactInfo.localisation}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

