import { useState, useEffect, useRef } from 'react'
import styles from '@/style/Modal.module.scss'
import { useClickOutside } from '@/hooks/useClickOutside'

function Modal( {children,showModal, setShowModal} ) {

  const modalRef = useRef()

  useClickOutside(modalRef, showModal, () => setShowModal(false))

  return (
    <>
        <div className={styles.overlay}>
          <div 
            ref={modalRef}
            className={styles.modal}
          >
            <div className={styles.modalContent}>
              {children}
            </div>
          </div>
        </div>
    </>
  )
}

export default Modal
