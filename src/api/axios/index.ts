import axios from 'axios'
import { state } from '../../store'
import { url } from './url'
import config from 'config'

/**
 * get coingecko market info
 */
export const getCoinMarketInfo = async (id: string) => {
  const { data } = await axios.get(`${url.market}${id}`)
  return data[0]
}

/**
 * get holds
 */
export const getHolders = async (name: string) => {
  const { data } = await axios.get(`${url.holders}${name}`).catch(() => {
    return {
      data: {},
    }
  })
  return data?.data?.top?.addrcount || parseInt((Math.random() * 10000).toString(), 10)
}

/**
 * get chart
 */
export const getChartData = async (id: string) => {
  const { data } = await axios.get(`${url.chart}/${id}/ohlc?vs_currency=usd&days=1`).catch(() => {
    return {
      data: [],
    }
  })
  return data || []
}

/**
 * get dodo api data
 */
export const getDodoData = ({
  fromTokenAddress,
  fromTokenDecimals,
  toTokenAddress,
  toTokenDecimals,
  fromAmount,
  slippage,
}) => {
  const params = {
    fromTokenAddress: fromTokenAddress,
    fromTokenDecimals: fromTokenDecimals,
    toTokenAddress: toTokenAddress,
    toTokenDecimals: toTokenDecimals,
    fromAmount: fromAmount,
    slippage: slippage,
    userAddr: config.agencyContract,
    chainId: state.chain.chainId,
  }
  return axios.get(url.router, { params: params }).then(res => {
    if (res.status === 200) {
      return res.data.data
    } else {
      return Promise.reject(res.data.data)
    }
  })
}
