import { useState, useEffect, useRef } from 'react'
import styles from '@/style/Modal.module.scss'
import { useClickOutside } from '@/hooks/useClickOutside'

function Modal() {
  const [showModal, setShowModal] = useState(false)
  const modalRef = useRef()

  useClickOutside(modalRef, showModal, () => setShowModal(false))

  return (
    <>
      <button onClick={() => setShowModal(true)}>Modal</button>
      {showModal && (
        <div 
          ref={modalRef}
          style={{border:"1px solid gray"}}
        >
          <h3>Modal Title</h3>
          <p>Modal Content</p>
          <button onClick={() => setShowModal(false)}>x</button>
        </div>
      )}
    </>
  )
}

export default Modal
