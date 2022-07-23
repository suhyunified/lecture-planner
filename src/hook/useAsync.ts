import { AxiosResponse } from 'axios'
import { useReducer, useEffect } from 'react'

enum TYPE {
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

type LoadingAction = { type: TYPE.LOADING }
type SuccessAction<T> = { type: TYPE.SUCCESS; data: T }
type ErrorAction<T> = { type: TYPE.ERROR; error: T }
type AsyncAction<D, E> = LoadingAction | SuccessAction<D> | ErrorAction<E>

type AsyncState<D, E> = {
  loading: boolean
  data: D | null
  error: E | any
}

function asyncReducer<D, E>(
  state: AsyncState<D, E>,
  action: AsyncAction<D, E>,
): AsyncState<D, E> {
  switch (action.type) {
    case 'SUCCESS':
      return {
        loading: false,
        data: action.data,
        error: null,
      }

    case 'ERROR':
      return {
        loading: false,
        data: null,
        error: action.error,
      }
    case 'LOADING':
    default:
      return {
        loading: true,
        data: null,
        error: null,
      }
  }
}

type PromiseFn<T> = (...args: any) => Promise<AxiosResponse<T, any>>

function useAsync<D, E, F extends PromiseFn<D>>(promiseFn: F) {
  const [state, dispatch] = useReducer(asyncReducer, {
    loading: false,
    data: null,
    error: false,
  } as AsyncState<D, E>)

  async function run(...params: Parameters<F>) {
    dispatch({ type: TYPE.LOADING })
    try {
      const data = await promiseFn(params)
      dispatch({ type: TYPE.SUCCESS, data })
    } catch (e) {
      dispatch({ type: TYPE.ERROR, error: e })
    }
  }

  return [state, run] as const
}

function useAsyncEffect<D, E, F extends PromiseFn<D>>(
  promiseFn: F,
  params: Parameters<F>,
  deps: any[],
) {
  const [state, run] = useAsync(promiseFn)
  useEffect(() => {
    run(...params)
  }, deps)

  return [state, run] as const
}

export default useAsync
export { useAsyncEffect }
