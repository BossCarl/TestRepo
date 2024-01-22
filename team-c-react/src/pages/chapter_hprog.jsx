import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function ChapterHprog(){
    return(
        <> 
      <div className="container mt-5 mx-auto">
        <h2 className="text-left mb-4">Chapters for HTML Programming</h2><hr/>
        <div className="cardChapter card mb-3">
        <div className="card-body d-flex justify-content-between" style={{ backgroundColor: '#126912', borderRadius: '10px' }}>
      <Link to="/course_hprog" className="h4 text-white" style={{ textDecoration: 'none' }}>
        CHAPTER 1: TITLE OF THE CHAPTER
      </Link>
    </div>
        </div>

        <div className="card mb-3" >
          <div className="card-body d-flex justify-content-between" style={{backgroundColor: '#126912', borderRadius: '10px'}}>
            <p className="h4 text-white" >CHAPTER 2: TITLE OF THE CHAPTER</p>
          </div>
        </div>

        <div className="card mb-3 chapterItemList" >
          <div className="card-body d-flex justify-content-between" style={{backgroundColor: '#126912', borderRadius: '10px'}}>
            <p className="h4 text-white">CHAPTER 3: TITLE OF THE CHAPTER</p>
          </div>
        </div>
        <Link to='/course' className="buttonReturn text-center" style={{ textDecoration: 'none', color: 'black'}}>
                          <div>
                            <img src="/pics/return.png" className="btnReturn" alt="return-icon" />
                            <span className="returnTitle" style={{ marginLeft: '5px' , color:'white'}}>Back</span>
                          </div>
                        </Link>
      </div>
        </>
    )
}

export default ChapterHprog;