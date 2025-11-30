/**
 * Composant Contact
 * Section de contact avec formulaire et informations de contact
 * Permet aux visiteurs d'envoyer un message
 */
import { useState } from 'react'
import '../styles/Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  // Gestion du changement des champs du formulaire
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Ici, vous pouvez ajouter la logique d'envoi d'email
    // Par exemple, utiliser un service comme EmailJS, Formspree, ou votre backend
    
    // Simulation d'envoi réussi
    setStatus('success')
    setFormData({ nom: '', email: '', sujet: '', message: '' })
    
    setTimeout(() => setStatus(''), 3000)
  }

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
          
          {/* Formulaire de contact */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nom">Nom *</label>
              <input
                type="text"
                id="nom"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                required
                placeholder="Votre nom"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="votre.email@example.com"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="sujet">Sujet *</label>
              <input
                type="text"
                id="sujet"
                name="sujet"
                value={formData.sujet}
                onChange={handleChange}
                required
                placeholder="Objet de votre message"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Votre message..."
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary">
              Envoyer le message
            </button>
            
            {status === 'success' && (
              <div className="form-status success">
                Message envoyé avec succès ! Je vous répondrai dès que possible.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

