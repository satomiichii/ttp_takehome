import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faThumbtack } from '@fortawesome/free-solid-svg-icons';

export const Pins = (props) => {
  const [listItem, setListItem] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const perPage = 8;
  const maxPage = Math.ceil(props.pins.length / perPage);

  const observer = useRef();
  const lastItemRef = useCallback(
    (elm) => {
      if (!loading) {
        if (observer.current) {
          observer.current.disconnect();
        }
        observer.current = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            if (page >= maxPage) {
              setPage(0);
            } else {
              setPage((prev) => prev + 1);
            }
          }
        });
        if (elm) {
          observer.current.observe(elm);
        }
      }
    },
    [loading, page, maxPage]
  );

  useEffect(() => {
    setLoading(true);
    const start = page * perPage;
    const end = start + perPage;
    const newItems = props.pins.slice(start, end);
    setListItem((prev) => {
      return [...prev, ...newItems];
    });
    setLoading(false);
  }, [page]);

  return (
    <div className="list-container">
      {listItem.map((pin, idx) => {
        return (
          (idx === listItem.length - 1 && (
            <div ref={lastItemRef} key={pin.board.id} className="item">
              <img src={pin.images['136x136'].url} />
              <div className="like-container">
                <div className="like">
                  <FontAwesomeIcon icon={faHeart} />
                  <div className="num">{pin.like_count}</div>
                </div>
              </div>
            </div>
          )) || (
            <div key={pin.board.id} className="item">
              <img src={pin.images['136x136'].url} />
              <div className="like-container">
                <div className="like">
                  <FontAwesomeIcon icon={faHeart} />
                  <div className="num">{pin.like_count}</div>
                </div>
              </div>
            </div>
          )
        );
      })}
      {loading && <div>LOADING...</div>}
    </div>
  );
};
