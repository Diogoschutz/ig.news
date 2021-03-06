import { FaGithub } from "react-icons/fa"
import { FiX } from "react-icons/fi"
import styles from './styles.module.scss'
import {signIn, useSession} from 'next-auth/react'

export function SigninButton () {
  const { data: session }= useSession()

  console.log(session)

  return session ? (
    <button
       type="button"
       className={styles.signInButton}
       >
        <FaGithub color="#04d361"/>
      Diogo Schutz 
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => signIn('github')}
    >
     <FaGithub color="#eba417"/>
     Sign in with Github 
    </button>
  );
}