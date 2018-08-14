import React, {Component} from 'react';
import Intro from '../../components/Intro';
import FilmList from '../../components/FilmList';
import Loader from '../../components/Loader';

/**
 * Film container
 * class ini berisi fetching data dan menampilkannnya
 */
class Film extends Component{

    // Membuat state films
    state = {
        films:[],//list of film
        filmName:"",//name of film
        isFetching:false//fetching status
    }
    /*
    // Komponen segera dimount setelah dpanggil
    componentDidMount(){
        //get api
        fetch('https://api.tvmaze.com/search/shows?q=Vikings')
        .then(response => response.json())
        .then(json=> this.setState({films:json}));
    
        
        //Give array to state
        const films =["Mission Imposible - Fallout","Ready Player One"];
        setTimeout(()=>{
          this.setState({films});
        })
    }
    */     

    onFilmInput= e => {
        this.setState({filmName:e.target.value, isFetching:true})
        //get api
        /**
         * '' -> strig + variable
         * `` && "" -> for string
         */
        fetch(`https://api.tvmaze.com/search/shows?q=${e.target.value}`)
            .then(response => response.json())
            .then(json=> this.setState({films:json, isFetching:false}));
    }

    render(){
        const {films, filmName, isFetching}=this.state;
        return(
            // Mengetahui panjang sebuah array
            <div>
                {/* Call component & pass message using props*/}
                <Intro message="Welcome to movie catalogue"/>
                Nama film 
                <input 
                    value={filmName}
                    type="text" 
                    onChange={this.onFilmInput}/>
                <div>
                    <p>Jumlah film yang ditemukan = {this.state.films.length}</p>
                </div>
                {
                    //cek apakah ada isinya
                    !isFetching && films.length ===0 && filmName.trim()===''
                    &&
                    <p>Silahka masukkan nama</p>
                }
                {
                    //cek apakah ada filmnya
                    !isFetching && films.length ===0 && filmName.trim()!==''
                    &&
                    <p>Film tdk ditemukan</p>
                }
                {
                    //cek apakah ada filmnya
                    isFetching
                    &&
                    <Loader/>
                }
                {
                    //cek apakah ada filmnya
                    !isFetching
                    &&
                    <FilmList list={this.state.films}/>
                }                
            </div>
        )
    }
}

export default Film;