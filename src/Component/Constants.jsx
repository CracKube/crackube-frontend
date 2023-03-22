import AnswerPage from './AnswerPage/AnswerPage';

// MainPage Components
export {default as MainBar} from './MainBar/MainBar'
export {default as AddButton} from './AddButton/AddButton'
export {default as BlogPart} from './BlogPart/BlogPart'

// BlogPage Components
export {default as BannerImage} from './BlogPart/BannerImage'; 
export {default as BlogAuthor} from './BlogPart/BlogAuthor';
export {default as BlogContent} from './BlogPart/BlogContent';

// Card1
export {default as Card1} from './Card/Card1/Card1'
export {default as CardAuthor1} from './Card/Card1/CardAuthor1'
export {default as CardImage1} from './Card/Card1/CardImage1'
export {default as CardTitle1} from './Card/Card1/CardTitle1'

// Card2
export {default as Card2} from './Card/Card2/Card2'
export {default as CardFlex} from  './Card/Card2/CardFlex'

//constants

export {default as bookmarkUrl} from '../styles/Icon feather-bookmark.svg';
export {default as thumbnailUrl} from '../styles/Sample-Blog-Thumbnail.svg'
export {default as authorUrl} from '../styles/Sample-Author.svg'
export {default as authorUrl2} from '../styles/Sample-Author 2.svg'
export {default as addbutton} from '../styles/Icons/PlusIcon 1.svg'
export {default as Flag} from '../styles/Icons/Flag.svg'
export {default as BestAnswer} from '../styles/BestAnswer.svg'
export {default as Like} from '../styles/like.svg'
export {default as Dislike} from '../styles/dislike.svg'

export {default as TopNavBar} from './NavBar/TopNavBar';
export {default as Dashboard} from './Dashboard/Dashboard';
export {default as Heading} from './MainBar/Heading/Heading';
export {default as AnswerPage} from './AnswerPage/AnswerPage'
export {default as AnswerCard} from './AnswerPage/AnswerCard/AnswerCard'
export {default as AnswersCard} from './AnswerPage/AnswerCard/AnswersCard/AnswersCard'
export {default as QuestionCard} from './AnswerPage/QuestionCard/QuestionCard'
export {default as Points} from './AnswerPage/Points/Points'
export {default as QuestionAuthor} from './AnswerPage/QuestionCard/QuestionAuthor/QuestionAuthor'
export {default as AnswersAuthor} from './AnswerPage/AnswerCard/AnswersCard/AnswersAuthor/AnswersAuthor'
export {default as Tags} from './AnswerPage/QuestionCard/Tags/Tags'

export const questiontext = 'There are 33 total tickets available in server. Now Mr. Amal wants to book 5 tickets and Ms. Githal wants to cancel 3 tickets at the same time. Two persons are doing Two persons are doing reservation and cancellation concurrently with out synchronization. So discuss the possible data inconsistency in this scenario with the help of appropriate pseudo code or program.Also provide any two solutions for this scenario to achieve data consistency. Write the solutions as Also discuss the constraints orpseudo code or program for this scenario and justify your answer. disadvantages of your suggested solutions and how will you overcome the same.'