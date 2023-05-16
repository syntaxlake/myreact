import styles from './Gallery.module.css';

const GalleryArticle = ({item}) => {
    let tags = item.galSearchKeyword.split(',') ;
    tags = tags.map((i) => <div><button>{i}</button></div>)


    return(
        <article>
                    <header>
                        <h1><span className = {styles.gt}>{item.galTitle}</span></h1>
                        <span className = {styles.gl}>{item.galPhotoGraphyLocation}</span>
                    </header>
                    <div>
                        <img src={item.galWebImageUrl.replace("http://", "https://")}/> 
                    </div>
                    <footer>
                    <div>
                        {tags}
                    </div>
                    </footer>
        </article>
    )
}

export default GalleryArticle;