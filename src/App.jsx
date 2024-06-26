import styles from "./style";
import { 
  Navbar,
  Button,
  Billing,
  Business,
  CTA,
  CardDeal,
  Client,
  FeedbackCard,
  Footer,
  Stats,
  GetStarted,
  Testimonials,
  Hero,} from "./components"

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
      
     <div className={` bg-black ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
      </div>
     </div>

     <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats/>
        <Business/>
        <Billing/>
        <CardDeal/>
        <Testimonials/>
        <Client/>
        <CTA/>
        <Footer/>
      </div>
     </div>
  </div>
);

export default App;
