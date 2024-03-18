import { FC } from 'react';

import { useGetServiceDataQuery } from '@/apis/serviceApiSlice';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { selectHomeCounter } from '@/store/home/homeSelector';
import { homeActions } from '@/store/home/homeSlice';

import s from './Home.module.scss';

const query = 9;

export const Home: FC = () => {
  const dispatch = useAppDispatch();
  const counter = useAppSelector(selectHomeCounter);

  const { data, isLoading, isSuccess } = useGetServiceDataQuery(query);

  // API data is automatically stored in the Redux store and is accessible in any part of the project.
  // const storedApiData = useAppSelector((state) => state.api);

  return (
    <div className={s.root}>
      <div>
        <h1 className={s.heading}>Redux Toolkit test counter: {counter}</h1>
        <div className={s.buttonsGroup}>
          <button
            className={`${s.button} ${s.primary}`}
            onClick={() => dispatch(homeActions.setCounter(counter + 1))}
          >
            Increase
          </button>
          <button
            className={`${s.button} ${s.secondary}`}
            onClick={() => dispatch(homeActions.setCounter(counter - 1))}
          >
            Decrease
          </button>
        </div>
        <div className={s.card}>
          {isLoading ? (
            <div className={s.text}>Loading...</div>
          ) : (
            <>
              {isSuccess ? (
                <>
                  <h2 className={s.heading2}>SWAPI API test: get starship</h2>
                  <div className={s.items}>
                    <div className={s.item}>Name: {data.name}</div>
                    <div className={s.item}>Model: {data.model}</div>
                    <div className={s.item}>
                      Manufactered: {data.manufacturer}
                    </div>
                  </div>
                </>
              ) : (
                <div className={s.text}>
                  Failed to fetch data for some reasone
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
