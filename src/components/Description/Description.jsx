import s from './Description.module.css'

const Description = () => {
  return (
    <div className={s.description}>
      <h1 className={s.text}>Sip Happens Cafe</h1>
      <p className={s.text}>
        Please leave your feedback about our service by selecting one of the
        options below
      </p>
    </div>
  )
}

export default Description