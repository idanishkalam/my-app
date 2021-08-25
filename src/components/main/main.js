import "./main.css";
import Card from './card'

const Main = () => {
  return (
    <main>
      <div className="main__container">
          <div className="main__greeting">
          A. BSP END
          </div>
       <Card name="SS/56" line="2" pre="1" iso="5"/>
       <Card name="SS/59" line="3" pre="4" iso="8"/>
       <Card name="SS/62" line="4" pre="" iso="7"/>
       <Card name="SS/65" line="5" pre="6" iso="3"/>
       <div className="main__greeting">
          B. NGP END
          </div>
       <Card name="SS/58" line="2" pre="2" iso="6"/>
       <Card name="SS/61" line="3" pre="3" iso="7"/>
       <Card name="SS/64" line="4" pre="6" iso=""/>
       <Card name="SS/67" line="5" pre="1" iso="2"/>
    
    
    </div>
      </main>
  );
};

export default Main;