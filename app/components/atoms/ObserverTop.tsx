import React, { useEffect } from 'react'
import { useNavbarContext } from '../../context/navbar.context'
import { useObserver } from '../../hooks'

const ObserverTop = () => {
   const { isHeaderWhite, setIsHeaderWhite } = useNavbarContext()
   const { setElements, entries } = useObserver({ threshold: 1 })

   useEffect(() => {
      const elements = document.querySelectorAll('#ObserverTop')
      setElements(elements)
   }, [setElements])

   useEffect(() => {
      entries.forEach((entry) => {
         if (!entry.isIntersecting) {
            setIsHeaderWhite(true)
         } else {
            setIsHeaderWhite(false)
         }
      })
   }, [isHeaderWhite, setIsHeaderWhite, entries])

   return <div id="ObserverTop"></div>
}

export default ObserverTop
