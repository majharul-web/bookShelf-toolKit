import React from "react";
import { addToFinishList, addToReadingList, removeFormFinishList, removeFormReadingList } from '../../redux/slieces/bookSlices'
import {
  HiPlusCircle,
  HiMinusCircle,
  HiCheckCircle
} from 'react-icons/hi';
import { useDispatch } from "react-redux";
import styles from './book.module.css'

const SingleBook = (props) => {
  const { title, author, coverImageUrl, synopsis } = props.book;
  console.log(props.type);
  const dispatch = useDispatch();

  return (
    <div className='card d-flex mb-3 p-3'
      style={{ position: 'relative' }}
    >
      <div className='row'>
        <div className='col-md-3'>
          <img className="img-fluid" src={coverImageUrl} alt='' />
        </div>
        <div className='col-md-9'>
          <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <h6>{author}</h6>
            <p className='card-text'>{synopsis.slice(0, 500)} ...</p>
          </div>
        </div>
      </div>
      <div className={styles.control_icons} >

        {
          props.type === 'readingList' ?
            <>
              <HiMinusCircle title="Remove from list"
                onClick={() => dispatch(removeFormReadingList(props.book))}
                className={styles.minus_icon} />

              <HiCheckCircle title="Mark as Finish"
                onClick={() => dispatch(addToFinishList(props.book))}
                className={styles.check_icon} />
            </>
            :
            props.type === 'finishList' ?
              <HiMinusCircle title="Remove from list"
                onClick={() => dispatch(removeFormFinishList(props.book))}
                className={styles.minus_icon} />
              :
              <HiPlusCircle title="Add to Reading"
                onClick={() => dispatch(addToReadingList(props.book))}
                className={styles.plus_icon} />
        }


      </div>
    </div>
  );
};

export default SingleBook;
