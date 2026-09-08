
import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import './App.css'
import introImg from './assets/intro.jpeg'
import manuFlores from './assets/IMG_3591.png'
import manu01 from './assets/manu01.jpeg'
import manu02 from './assets/manu02.jpeg'
import manu03 from './assets/manu03.jpeg'
import manu04 from './assets/manu04.jpeg'
import manu05 from './assets/manu05.jpeg'
import manu06 from './assets/manu06.jpeg'
import manu07 from './assets/manu07.jpeg'
import manu08 from './assets/manu08.jpeg'
import manu09 from './assets/manu09.jpeg'
import mapIcon from './assets/map.png'
import bgMusic from './assets/scqs.mp3'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { initializeFirestore, collection, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration secured with environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true,
});

// Función para registrar un nombre con timeout para evitar que quede colgado
async function registrarNombre(nombre: string, numinvitados: number) {
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Tiempo de espera agotado al conectar con el servidor")), 10000)
  );

  const savePromise = addDoc(collection(db, "invitados"), {
    nombre: nombre,
    invitados: numinvitados,
    fechaRegistro: new Date()
  });

  try {
    const docRef = await Promise.race([savePromise, timeoutPromise]);
    return docRef;
  } catch (error) {
    console.error("Error al registrar el nombre: ", error);
    throw error;
  }
}

// Custom hook for responsive layout
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth <= breakpoint : false
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`)
    const updateMatch = () => setIsMobile(mediaQuery.matches)
    updateMatch()
    mediaQuery.addEventListener('change', updateMatch)
    return () => mediaQuery.removeEventListener('change', updateMatch)
  }, [breakpoint])

  return isMobile
}

function MobileMisaSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const cardX = useTransform(scrollYProgress, [0, 0.45, 1], [-60, 0, 0], { clamp: true })
  const cardRot = useTransform(scrollYProgress, [0, 0.45, 1], [-6, 0, 0], { clamp: true })
  const cardScale = useTransform(scrollYProgress, [0, 0.45, 1], [0.85, 1, 1], { clamp: true })
  const cardOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1], { clamp: true })

  const mapBounceY = useTransform(scrollYProgress, [0, 0.45, 0.55, 0.65, 0.75, 0.85, 1], [0, 0, -20, 0, -10, 0, 0], { clamp: true })
  const mapBounceScale = useTransform(scrollYProgress, [0, 0.45, 0.55, 0.65, 0.75, 0.85, 1], [1, 1, 1.2, 0.96, 1.1, 0.98, 1], { clamp: true })
  const mapBounceRot = useTransform(scrollYProgress, [0, 0.45, 0.55, 0.65, 0.75, 0.85, 1], [0, 0, -8, 6, -3, 1, 0], { clamp: true })

  return (
    <div className='scroll-section-container' ref={containerRef}>
      <div className='scroll-section-sticky'>
        <div className='flex center-w'>
          <motion.div
            className="small-card"
            style={{ x: cardX, rotate: cardRot, scale: cardScale, opacity: cardOpacity }}
          >
            <h1>Misa</h1>
            <p><strong>5:00 pm</strong></p>

            <div className='flex center-w'>
              <motion.a
                className='map-icon'
                href='https://maps.app.goo.gl/YrJW4Q5hYvbfLf1u8'
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  y: mapBounceY,
                  scale: mapBounceScale,
                  rotate: mapBounceRot,
                  display: 'inline-block',
                }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={mapIcon} alt="Map" />
              </motion.a>
            </div>
            <p>Parroquia de nuestra señora del destierro</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function MobileRecepcionSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const cardX = useTransform(scrollYProgress, [0, 0.45, 1], [60, 0, 0], { clamp: true })
  const cardRot = useTransform(scrollYProgress, [0, 0.45, 1], [6, 0, 0], { clamp: true })
  const cardScale = useTransform(scrollYProgress, [0, 0.45, 1], [0.85, 1, 1], { clamp: true })
  const cardOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1], { clamp: true })

  const mapBounceY = useTransform(scrollYProgress, [0, 0.45, 0.55, 0.65, 0.75, 0.85, 1], [0, 0, -20, 0, -10, 0, 0], { clamp: true })
  const mapBounceScale = useTransform(scrollYProgress, [0, 0.45, 0.55, 0.65, 0.75, 0.85, 1], [1, 1, 1.2, 0.96, 1.1, 0.98, 1], { clamp: true })
  const mapBounceRot = useTransform(scrollYProgress, [0, 0.45, 0.55, 0.65, 0.75, 0.85, 1], [0, 0, -8, 6, -3, 1, 0], { clamp: true })

  return (
    <div className='scroll-section-container' ref={containerRef}>
      <div className='scroll-section-sticky'>
        <div className='flex center-w'>
          <motion.div
            className="small-card"
            style={{ x: cardX, rotate: cardRot, scale: cardScale, opacity: cardOpacity }}
          >
            <h1>Recepción</h1>
            <p><strong>6:00pm</strong></p>

            <div className='flex center-w'>
              <motion.a
                className='map-icon'
                href='https://maps.app.goo.gl/qGQAaZU4FfchrnsT9'
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  y: mapBounceY,
                  scale: mapBounceScale,
                  rotate: mapBounceRot,
                  display: 'inline-block',
                }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={mapIcon} alt="Map" />
              </motion.a>
            </div>
            <p>Salón Los Encinos</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function DesktopCardsSection() {
  const cardsContainerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: scrollYCards } = useScroll({
    target: cardsContainerRef,
    offset: ['start start', 'end end'],
  })

  // Card 1 (Misa) enters first (0 to 40% of scroll)
  const card1X = useTransform(scrollYCards, [0, 0.4, 1], [-100, 0, 0], { clamp: true })
  const card1Rot = useTransform(scrollYCards, [0, 0.4, 1], [-8, 0, 0], { clamp: true })
  const card1Scale = useTransform(scrollYCards, [0, 0.4, 1], [0.85, 1, 1], { clamp: true })
  const card1Opacity = useTransform(scrollYCards, [0, 0.25, 1], [0, 1, 1], { clamp: true })

  // Card 2 (Recepción) enters second (35% to 70% of scroll)
  const card2X = useTransform(scrollYCards, [0, 0.35, 0.7, 1], [100, 100, 0, 0], { clamp: true })
  const card2Rot = useTransform(scrollYCards, [0, 0.35, 0.7, 1], [8, 8, 0, 0], { clamp: true })
  const card2Scale = useTransform(scrollYCards, [0, 0.35, 0.7, 1], [0.85, 0.85, 1, 1], { clamp: true })
  const card2Opacity = useTransform(scrollYCards, [0, 0.35, 0.55, 1], [0, 0, 1, 1], { clamp: true })

  // Bouncing animation for map icons after both cards have settled (70% to 100%)
  const mapBounceY = useTransform(scrollYCards, [0, 0.7, 0.77, 0.84, 0.91, 0.96, 1], [0, 0, -20, 0, -10, 0, 0], { clamp: true })
  const mapBounceScale = useTransform(scrollYCards, [0, 0.7, 0.77, 0.84, 0.91, 0.96, 1], [1, 1, 1.2, 0.96, 1.1, 0.98, 1], { clamp: true })
  const mapBounceRot = useTransform(scrollYCards, [0, 0.7, 0.77, 0.84, 0.91, 0.96, 1], [0, 0, -8, 6, -3, 1, 0], { clamp: true })

  return (
    <div className='scroll-section-container' ref={cardsContainerRef}>
      <div className='scroll-section-sticky'>
        <div className='flex center-w f-wrap'>
          <motion.div
            className="small-card"
            style={{ x: card1X, rotate: card1Rot, scale: card1Scale, opacity: card1Opacity }}
          >
            <h1>Misa</h1>
            <p><strong>5:00 pm</strong></p>

            <div className='flex center-w'>
              <motion.a
                className='map-icon'
                href='https://maps.app.goo.gl/YrJW4Q5hYvbfLf1u8'
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  y: mapBounceY,
                  scale: mapBounceScale,
                  rotate: mapBounceRot,
                  display: 'inline-block',
                }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={mapIcon} alt="Map" />
              </motion.a>
            </div>
            <p>Parroquia de nuestra señora del destierro</p>
          </motion.div>
          <motion.div
            className="small-card"
            style={{ x: card2X, rotate: card2Rot, scale: card2Scale, opacity: card2Opacity }}
          >
            <h1>Recepción</h1>
            <p><strong>6:00pm</strong></p>

            <div className='flex center-w'>
              <motion.a
                className='map-icon'
                href='https://maps.app.goo.gl/qGQAaZU4FfchrnsT9'
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  y: mapBounceY,
                  scale: mapBounceScale,
                  rotate: mapBounceRot,
                  display: 'inline-block',
                }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={mapIcon} alt="Map" />
              </motion.a>
            </div>
            <p>Salón Los Encinos</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function App() {
  const isMobile = useIsMobile(768)
  const [nombre, setNombre] = useState('')
  const [numInvitados, setNumInvitados] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [autenticado, setAutenticado] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Sesión activa con UID:", user.uid);
        setAutenticado(true);
      } else {
        // Si no hay sesión activa, iniciar sesión de forma anónima
        signInAnonymously(auth)
          .then(() => console.log("Sesión anónima iniciada."))
          .catch((error) => console.error("Error al autenticar:", error));
      }
    });

    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true)
          })
          .catch((err) => console.log("Autoplay prevent / awaiting user interaction:", err));
      }
    }

    // Try starting on mount (works on desktop/browsers allowing autoplay)
    playAudio();

    const handleFirstInteraction = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch((err) => console.log("Play failed on interaction:", err));
      }
      window.removeEventListener('click', handleFirstInteraction)
      window.removeEventListener('touchstart', handleFirstInteraction)
    }

    window.addEventListener('click', handleFirstInteraction)
    window.addEventListener('touchstart', handleFirstInteraction)

    return () => {
      window.removeEventListener('click', handleFirstInteraction)
      window.removeEventListener('touchstart', handleFirstInteraction)
      unsubscribe();
    }
  }, [])

  const toggleMusic = () => {
    if (!audioRef.current) return
    if (audioRef.current.paused) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.error("Could not play audio:", err))
    } else {
      audioRef.current.pause()
      setIsPlaying(false)
    }
  }

  const handleConfirmar = async () => {
    setErrorMessage('')
    setSuccessMessage('')

    if (!nombre.trim()) {
      setErrorMessage('Debes escribir tu nombre.')
      return
    }

    if (!autenticado) {
      setErrorMessage('Esperando conexión segura... intenta mas tarde.')
      return
    }

    const invitados = parseInt(numInvitados, 10)
    if (isNaN(invitados) || invitados < 1) {
      setErrorMessage('Debes escribir la cantidad de invitados.')
      return
    }

    setIsSubmitting(true)
    try {
      await registrarNombre(nombre.trim(), invitados)
      setSuccessMessage('¡Gracias por confirmar tu asistencia!')
      setNombre('')
      setNumInvitados('')
    } catch (error) {
      setErrorMessage('Algo salio mal, intenta mas tarde.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const galleryContainerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: galleryContainerRef,
    offset: ['start start', 'end end'],
  })

  // Entrance offsets for each of the 8 images as the user scrolls
  const x1 = useTransform(scrollYProgress, [0, 1], [-100, 0])
  const y1 = useTransform(scrollYProgress, [0, 1], [-60, 0])
  const rot1 = useTransform(scrollYProgress, [0, 1], [-12, 0])

  const x2 = useTransform(scrollYProgress, [0, 1], [0, 0])
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 0])
  const rot2 = useTransform(scrollYProgress, [0, 1], [8, 0])

  const x3 = useTransform(scrollYProgress, [0, 1], [0, 0])
  const y3 = useTransform(scrollYProgress, [0, 1], [-100, 0])
  const rot3 = useTransform(scrollYProgress, [0, 1], [-6, 0])

  const x4 = useTransform(scrollYProgress, [0, 1], [100, 0])
  const y4 = useTransform(scrollYProgress, [0, 1], [-60, 0])
  const rot4 = useTransform(scrollYProgress, [0, 1], [10, 0])

  const x5 = useTransform(scrollYProgress, [0, 1], [-100, 0])
  const y5 = useTransform(scrollYProgress, [0, 1], [60, 0])
  const rot5 = useTransform(scrollYProgress, [0, 1], [10, 0])

  const x7 = useTransform(scrollYProgress, [0, 1], [0, 0])
  const y7 = useTransform(scrollYProgress, [0, 1], [100, 0])
  const rot7 = useTransform(scrollYProgress, [0, 1], [-8, 0])

  const x8 = useTransform(scrollYProgress, [0, 1], [0, 0])
  const y8 = useTransform(scrollYProgress, [0, 1], [100, 0])
  const rot8 = useTransform(scrollYProgress, [0, 1], [6, 0])

  const x6 = useTransform(scrollYProgress, [0, 1], [100, 0])
  const y6 = useTransform(scrollYProgress, [0, 1], [60, 0])
  const rot6 = useTransform(scrollYProgress, [0, 1], [-10, 0])

  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0.1, 0.7, 1])
  const scale = useTransform(scrollYProgress, [0, 1], [0.75, 1])

  // Scroll animations for Flores section
  const floresContainerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: scrollYFlores } = useScroll({
    target: floresContainerRef,
    offset: ['start start', 'end end'],
  })
  const floresY = useTransform(scrollYFlores, [0, 1], [90, 0])
  const floresScale = useTransform(scrollYFlores, [0, 1], [0.75, 1])
  const floresRot = useTransform(scrollYFlores, [0, 1], [-8, 0])
  const floresOpacity = useTransform(scrollYFlores, [0, 0.4, 1], [0.1, 0.7, 1])
  const floresTextY = useTransform(scrollYFlores, [0, 0.4, 1], [30, 15, 0])
  const floresTextOpacity = useTransform(scrollYFlores, [0, 0.3, 1], [0, 0.6, 1])

  // Scroll animations for Final Image Section
  const finalContainerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: scrollYFinal } = useScroll({
    target: finalContainerRef,
    offset: ['start start', 'end end'],
  })
  const finalY = useTransform(scrollYFinal, [0, 1], [80, 0])
  const finalRot = useTransform(scrollYFinal, [0, 1], [6, 0])
  const finalScale = useTransform(scrollYFinal, [0, 1], [0.8, 1])
  const finalOpacity = useTransform(scrollYFinal, [0, 0.4, 1], [0.1, 0.7, 1])

  return (
    <div className='card'>
      <audio ref={audioRef} src={bgMusic} loop preload="auto" />
      <button
        className="music-toggle-btn"
        onClick={toggleMusic}
        title={isPlaying ? "Pausar música" : "Reproducir música"}
        aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
      >
        {isPlaying ? '🎵' : '🔇'}
      </button>

      <div className="corner top left"></div>
      <div className="corner top right"></div>
      <div className="corner bottom left"></div>
      <div className="corner bottom right"></div>
      <div className="content">
        <div className="page page1">
          <h1>Estás cordialmente invitado</h1>
          <div className='flex center-w'>
            <img className="intro" src={ introImg } />
          </div>
        </div>
        <div className='gallery-scroll-container' ref={galleryContainerRef}>
          <div className='gallery-sticky-wrapper'>
            <div className='flex center-w center-h' style={{ height: '100%' }}>
              <div className='gallery'>
                <motion.img
                  className="manu01"
                  src={manu01}
                  alt="Manu 1"
                  style={{ x: x1, y: y1, rotate: rot1, opacity, scale }}
                />
                <motion.img
                  className="manu02"
                  src={manu02}
                  alt="Manu 2"
                  style={{ x: x2, y: y2, rotate: rot2, opacity, scale }}
                />
                <motion.img
                  className="manu03"
                  src={manu03}
                  alt="Manu 3"
                  style={{ x: x3, y: y3, rotate: rot3, opacity, scale }}
                />
                <motion.img
                  className="manu04"
                  src={manu04}
                  alt="Manu 4"
                  style={{ x: x4, y: y4, rotate: rot4, opacity, scale }}
                />
                <motion.img
                  className="manu05"
                  src={manu05}
                  alt="Manu 5"
                  style={{ x: x5, y: y5, rotate: rot5, opacity, scale }}
                />
                <motion.img
                  className="manu07"
                  src={manu07}
                  alt="Manu 7"
                  style={{ x: x7, y: y7, rotate: rot7, opacity, scale }}
                />
                <motion.img
                  className="manu08"
                  src={manu08}
                  alt="Manu 8"
                  style={{ x: x8, y: y8, rotate: rot8, opacity, scale }}
                />
                <motion.img
                  className="manu06"
                  src={manu06}
                  alt="Manu 6"
                  style={{ x: x6, y: y6, rotate: rot6, opacity, scale }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='scroll-section-container' ref={floresContainerRef}>
          <div className='scroll-section-sticky'>
            <div className='flex center-w'>
              <motion.img
                className="flores"
                src={manuFlores}
                alt="Flores"
                style={{ y: floresY, rotate: floresRot, scale: floresScale, opacity: floresOpacity }}
              />
            </div>
            <motion.p style={{ y: floresTextY, opacity: floresTextOpacity }}>
              Hay fechas que merecen celebrarse. Te invito a compartir conmigo la alegría de mis 60 años.
            </motion.p>
          </div>
        </div>

        <div className='page'>
          <h1>Sábado 3 de Octubre de 2026</h1>
        </div>

        {isMobile ? (
          <>
            <MobileMisaSection />
            <MobileRecepcionSection />
          </>
        ) : (
          <DesktopCardsSection />
        )}

        <div className='page'>
          <div className='medium-card'>
            <h1>Programa</h1>
            <p>Comida 6:00pm-8:00pm</p>
            <p>Pastel: 9:30pm-10:00pm</p>
            <p>Baile: 10:00pm-12:00pm</p>
          </div>
        </div>

        <div className='scroll-section-container' ref={finalContainerRef}>
          <div className='scroll-section-sticky'>
            <div className='flex center-w'>
              <motion.img
                className="final"
                src={manu09}
                alt="Manu final"
                style={{ y: finalY, rotate: finalRot, scale: finalScale, opacity: finalOpacity }}
              />
            </div>
            <motion.p style={{ opacity: finalOpacity }}>
              Sesenta años llenos de vida, amor y gratitud. Me encantaría compartir este día contigo.
            </motion.p>
          </div>
        </div>

        <div className='page'>
          <p>¡No Faltes!</p>
          <div className='inputs'>
            <input
              className='nombre'
              type='text'
              placeholder='Escribe tu nombre o el de tu familia'
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              disabled={isSubmitting}
            />
            <input
              className='numero'
              type='number'
              inputMode="numeric"
              pattern="\d*"
              placeholder='Num. de asistentes'
              value={numInvitados}
              onChange={(e) => setNumInvitados(e.target.value)}
              min={1}
              disabled={isSubmitting}
            />
          </div>
          <div className='flex center-w'>
            <button className='boton' onClick={handleConfirmar} disabled={isSubmitting}>
              {isSubmitting ? 'Guardando...' : 'Confirma'}
            </button>
          </div>
          {errorMessage && <p className='error-msg'>{errorMessage}</p>}
          {successMessage && <p className='success-msg'>{successMessage}</p>}
        </div>

      </div>
    </div>
  )
}

export default App
