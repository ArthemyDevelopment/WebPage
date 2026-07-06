import type { ImageMetadata } from 'astro'

// Import each credential's image (and optional issuer logo) so Astro can optimize them.
import boardGameDesign from '@assets/images/course/BoardAndVideoGameDesign.jpg'
import pythonBasic from '@assets/images/course/CertificadoPythonOpenAcademy.png'
import designPatters1 from '@assets/images/course/DesignPatterns1.jpg'
import designPatterns2 from '@assets/images/course/DesignPatterns2.jpg'
import gameDesignEssentials from '@assets/images/course/GameDesignEssentials.jpg'
import gamification from '@assets/images/course/Gamification.jpg'
import github from '@assets/images/course/GitHub.jpg'
import nodeBaseEditor from '@assets/images/course/NodeBaseEditor.jpg'
import psychologyOfGames from '@assets/images/course/PsychologyOfGames.jpg'
import saveGames from '@assets/images/course/SaveGames.jpg'
import unityEditor from '@assets/images/course/UnityEditor.jpg'
import unityVr from '@assets/images/course/UnityVR.jpg'
import englishC2 from '@assets/images/certificates/CertificadoIngles.jpg'
import sparkAr from '@assets/images/certificates/CertificadoSparkAr.jpg'
import bachelorDegree from '@assets/images/degrees/CertificadoDeTitulo.png'
import udemyLogo from '@assets/images/logos/udemy.png'
import unabLogo from '@assets/images/logos/unab.png'
import efSetLogo from '@assets/images/logos/efset.png'
import criticLogo from '@assets/images/logos/crtic.png'
import santanderOpenAcademyLogo from '@assets/images/logos/santander-open-academy.png'
import gameDevTvLogo from '@assets/images/logos/gamedevtv.png'
import introExcel from '@assets/images/course/IntroToExcel.jpg'

export const CredentialCategory = {
  Course: 'course',
  Certificate: 'certificate',
  Degree: 'degree',
} as const

export type CredentialCategoryValue = (typeof CredentialCategory)[keyof typeof CredentialCategory]

export interface Credential {
  id: string
  title: string
  category: CredentialCategoryValue
  issuer?: string
  /** Small issuer logo shown next to the issuer name */
  logo?: ImageMetadata
  date?: Date
  /** Higher sorts first within the same featured/date tier. Useful once you have many entries. */
  priority?: number
  image: ImageMetadata
  /** Store lowercase (e.g. "unity", not "Unity") — the component capitalizes these for display. */
  tags: string[]
  featured?: boolean
  /** Link to the credential itself (PDF, certificate page, etc.) — makes the whole card clickable */
  credentialUrl?: string
  /** Separate link to verify the credential online, e.g. a badge or issuer verification page */
  verificationUrl?: string
  description?: string
}

export const credentials: Credential[] = [
  {
    id: 'board-game-design',
    title: 'Create Board and Video Game Design Projects - 4 Courses in 1',
    category: CredentialCategory.Course,
    issuer: 'Udemy',
    logo: udemyLogo,
    image: boardGameDesign,
    date: new Date('2024-10-01'),
    priority: 90,
    tags: ['game design', 'game development'],
    featured: true,
    verificationUrl: 'https://www.udemy.com/certificate/UC-570a567c-a835-439e-afee-1f5445c11ce5/',
    description: 'Course focused on game design theory applied to videogames and board games.',
  },
  {
    id: 'python-basic',
    title: 'Python',
    category: CredentialCategory.Course,
    issuer: 'Santander Open Academy',
    logo: santanderOpenAcademyLogo,
    image: pythonBasic,
    date: new Date('2025-07-21'),
    priority: 40,
    tags: ['python', 'programming'],
    featured: true,
    description: 'Introduction to Python programming language.',
  },
  {
    id: 'ultimate-guide-design-patterns',
    title: 'The Ultimate Guide to Unity Designpatterns',
    category: CredentialCategory.Course,
    issuer: 'Udemy',
    logo: udemyLogo,
    image: designPatters1,
    date: new Date('2021-02-16'),
    priority: 80,
    tags: ['unity', 'design patterns', 'programming', 'game development'],
    featured: true,
    verificationUrl: 'https://www.udemy.com/certificate/UC-61b2ebd4-3db8-4199-94ee-ab291ff272ca/',
    description: 'Advance course on design patterns applied to Unity game development.',
  },
  {
    id: 'design-patterns-game-programming',
    title: 'Design Patterns for Game Programming',
    category: CredentialCategory.Course,
    issuer: 'Udemy',
    logo: udemyLogo,
    image: designPatterns2,
    date: new Date('2021-07-30'),
    priority: 80,
    tags: ['unity', 'design patterns', 'programming', 'game development'],
    featured: true,
    verificationUrl: 'https://www.udemy.com/certificate/UC-26c7636f-a1b8-4a2f-839d-5f5a4594e59d/',
    description: 'Advance course on design patterns applied to Unity game development.',
  },
  {
    id: 'game-design-essentials',
    title: 'Game Design Essentials: Tools, Theories and Techniques',
    category: CredentialCategory.Course,
    issuer: 'Udemy',
    logo: udemyLogo,
    image: gameDesignEssentials,
    date: new Date('2024-11-24'),
    priority: 90,
    tags: ['game design', 'game development'],
    featured: true,
    verificationUrl: 'https://www.udemy.com/certificate/UC-18e2c2e7-5f18-4956-b825-be04cc55a886/f5a4594e59d/',
    description: 'In depth course on game design theory.',
  },
  {
    id: 'gamification',
    title: 'Gamification: Motivation Psychology & the Art of Engagement',
    category: CredentialCategory.Course,
    issuer: 'Udemy',
    logo: udemyLogo,
    image: gamification,
    date: new Date('2025-06-06'),
    priority: 90,
    tags: ['game design', 'game development', 'gamification'],
    featured: true,
    verificationUrl: 'https://www.udemy.com/certificate/UC-2c56054d-4538-4a4f-974e-734d128b581c/',
    description: 'Course on human psychology and motivation applied to gamification and game design.',
  },
  {
    id: 'git',
    title: 'Get Git Smart Course: Learn Git in Unity, SourceTree, GitHub',
    category: CredentialCategory.Course,
    issuer: 'GameDev.tv',
    logo: gameDevTvLogo,
    image: github,
    date: new Date('2021-12-13'),
    priority: 40,
    tags: ['productivity', 'game development'],
    featured: true,
    description: 'Course on Git version control system and its use in game development.',
  },
  {
    id: 'node-base-editor',
    title: 'Creating a Node Base Editor in Unity 3D',
    category: CredentialCategory.Course,
    issuer: 'Udemy',
    logo: udemyLogo,
    image: nodeBaseEditor,
    date: new Date('2024-12-20'),
    priority: 70,
    tags: ['programming', 'game development', 'unity', 'tool development'],
    featured: true,
    verificationUrl: 'https://www.udemy.com/certificate/UC-e8350247-5c03-4336-9564-c109a83d6a02/',
    description: 'Course on creating custom node base editor tools in Unity.',
  },
  {
    id: 'psychology-of-games',
    title: 'The Psychology of Games - Secrets of Good Game Design',
    category: CredentialCategory.Course,
    issuer: 'Udemy',
    logo: udemyLogo,
    image: psychologyOfGames,
    date: new Date('2025-07-03'),
    priority: 90,
    tags: ['game development', 'game design', 'gamification'],
    featured: true,
    verificationUrl: 'https://www.udemy.com/certificate/UC-7bcb856e-c895-4bf5-ae8b-4bbe80020f8b/',
    description: 'In depth course on psychology applied to game design and gamification.',
  },
  {
    id: 'save-games',
    title: 'The Ultimate Guide to Savegames in Unity',
    category: CredentialCategory.Course,
    issuer: 'Udemy',
    logo: udemyLogo,
    image: saveGames,
    date: new Date('2021-02-25'),
    priority: 70,
    tags: ['unity', 'programming', 'game development', 'tool development'],
    featured: true,
    verificationUrl: 'https://www.udemy.com/certificate/UC-d8a81cb8-959c-4ff4-9c97-96d0ed6fd0d9/',
    description: 'Course on data persistance, including playerPrefs, Json and encryption, in Unity',
  },
  {
    id: 'editor-scripting',
    title: 'Unity C# Editor Scripting Masterclass',
    category: CredentialCategory.Course,
    issuer: 'Udemy',
    logo: udemyLogo,
    image: unityEditor,
    date: new Date('2021-02-12'),
    priority: 70,
    tags: ['unity', 'programming', 'game development', 'tool development'],
    featured: true,
    verificationUrl: 'https://www.udemy.com/certificate/UC-aba7b753-caba-4c2c-b0ea-70380033a900/',
    description: 'Course on data persistance, including playerPrefs, Json and encryption, in Unity',
  },
  {
    id: 'vr-development-unity',
    title: 'VR Development Fundamentals with Oculus Quest 2 and Unity',
    category: CredentialCategory.Course,
    issuer: 'Udemy',
    logo: udemyLogo,
    image: unityVr,
    date: new Date('2021-12-01'),
    priority: 70,
    tags: ['unity', 'programming', 'game development', 'xr'],
    featured: true,
    verificationUrl: 'https://www.udemy.com/certificate/UC-9e390bae-c325-4f76-be0b-1578534d7868/',
    description: 'Course on VR development fundamentals using Unity and Oculus Quest 2.',
  },
  {
    id: 'english-c2',
    title: 'EF Set C2 84/100',
    category: CredentialCategory.Certificate,
    issuer: 'EF Set',
    logo: efSetLogo,
    image: englishC2,
    date: new Date('2021-10-04'),
    priority: 95,
    tags: ['productivity', 'languages'],
    featured: true,
    verificationUrl: 'https://www.efset.org/cert/zfnutf',
    description: 'English certificate with a C2 level (Proficient) and a score of 84/100.',
  },
  {
    id: 'meta-spark-ar',
    title: 'Meta Spark AR Developer',
    category: CredentialCategory.Certificate,
    issuer: 'CRT+IC',
    logo: criticLogo,
    image: sparkAr,
    date: new Date('2023-12-01'),
    priority: 70,
    tags: [ 'programming', 'xr'],
    featured: true,
    description: 'Course on AR development using Meta Spark AR Studio and its scripting capabilities.',
  },
  {
    id: 'game-design-bachelor-degree',
    title: 'Digital Games Design Bachelor Degree',
    category: CredentialCategory.Degree,
    issuer: 'Universidad Andrés Bello',
    logo: unabLogo,
    image: bachelorDegree,
    date: new Date('2020-12-22'),
    priority: 70,
    tags: ['game design', 'game development'],
    featured: true,
    description: 'Bachelor degree in Digital Games Design - Magna Cum Laude',
  },
  {
    id: 'intro-to-excel',
    title: 'Intro to Excel',
    category: CredentialCategory.Course,
    issuer: 'Zenva',
    image: introExcel,
    date: new Date('2022-01-29'),
    priority: 40,
    tags: ['productivity', 'game development'],
    featured: true,
    description: 'An introduction to Microsoft Excel, covering basic functions, formulas, and data management techniques.',
  },
  // ...add more certificates, diplomas, and degrees here
]
