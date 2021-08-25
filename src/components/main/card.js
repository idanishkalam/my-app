import './card.css'

const Card=({name,line,pre,iso})=>{
    return (
        <main>
              <div className="main__cards">
              <div className="card">
          <div >
          <p>{name}</p>
          <p style={{fontSize:10}}>Line No.{line}</p>
          </div>
          </div>
          <div style={{background:(pre=="1")?"#E85A4F":(iso=="1")?"#eeee90":"#90ee90"}}className="card">
              <div >
          <p>{name}/01</p>
          </div>
          </div>

          <div style={{background:(pre=="2")?"#E85A4F":(iso=="2")?"#eeee90":"#90ee90"}}className="card">
          <div >
          <p>{name}/02</p>
          </div>
          </div>
          <div style={{background:(pre=="3")?"#E85A4F":(iso=="3")?"#eeee90":"#90ee90"}}className="card">
          <div >
          <p>{name}/03</p>
          </div>
          </div>
          <div style={{background:(pre=="4")?"#E85A4F":(iso=="4")?"#eeee90":"#90ee90"}} className="card">
          <div >
          <p>{name}/04</p>
          </div>
          </div>
          <div style={{background:(pre=="5")?"#E85A4F":(iso=="5")?"#eeee90":"#90ee90"}} className="card">
          <div >
          <p>{name}/05</p>
          </div>
          </div>
          <div style={{background:(pre=="6")?"#E85A4F":(iso=="6")?"#eeee90":"#90ee90"}} className="card">
          <div >
          <p>{name}/06</p>
          </div>
          </div>
          <div style={{background:(pre=="7")?"#E85A4F":(iso=="7")?"#eeee90":"#90ee90"}} className="card">
          <div >
          <p>{name}/07</p>
          </div>
          </div>
          <div style={{background:(pre=="8")?"#E85A4F":(iso=="8")?"#eeee90":"#90ee90"}} className="card">
          <div >
          <p>{name}/08</p>
          </div>
          </div>
          
          
        </div>
        </main>
    )
}
export default Card;