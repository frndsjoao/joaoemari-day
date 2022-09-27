import { formatToPhone } from 'brazilian-values'
import { FormEvent, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import Loaders from '../../../components/Loaders'
import styles from './styles.module.scss'
import emailjs from '@emailjs/browser';

export default function Rsvp() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [guests, setGuests] = useState('')
  const [loading, setLoading] = useState(false)

  const form = useRef()

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if (loading) return;

    if (!name.trim() || !phone.trim()) {
      toast('Preencha o nome e telefone!', {
        style: {
          background: '#DBA7A0',
          color: '#FFFFFF',
          fontWeight: 400
        }
      });
      return
    }

    try {
      setLoading(true)
      await emailjs.sendForm(
        'service_947k9dj',
        'template_f1im6w8',
        form.current,
        'TYCx1Ku8CkRbNjkBL'
      )
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });

      setName('')
      setPhone('')
      setGuests('')
      setTimeout(() => setLoading(false), 1500)

      toast('Obrigado pela confirmação!', {
        style: {
          background: '#7a8262',
          color: '#FFFFFF',
          fontWeight: 400
        }
      });

    }
    catch (error) {
      toast('Ocorreu um erro. Tente novamente mais tarde', {
        style: {
          background: '#DBA7A0',
          color: '#FFFFFF',
          fontWeight: 400
        }
      });
    }
  }

  return (
    <main id="rsvp" className={styles.rsvpContainer}>
      <h2>Confirme sua presença</h2>
      <p>
        Sua confirmação nos ajudará a montar a lista de convidados.
        É <b>indispensável</b> a entrega do convite individual na entrada do
        local.
      </p>

      <form ref={form} className={styles.rsvpForm} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Seu nome e sobrenome'
          value={name}
          name="user_name"
          onChange={({ target }) => setName(target.value)}
        />
        <input
          type="text"
          placeholder='Seu telefone'
          value={phone}
          name="user_phone"
          onChange={({ target }) => setPhone(formatToPhone(target.value))}
          maxLength={16}
        />
        <textarea
          placeholder='Quem mais da sua família virá? (nome e sobrenome)'
          value={guests}
          name="user_guests"
          onChange={({ target }) => setGuests(target.value)}
        />

        <button type='submit' disabled={loading}>
          {loading ? (
            <Loaders rsvpConfirmation />
          ) : 'Confirmar'}
        </button>
      </form>
    </main>
  )
}