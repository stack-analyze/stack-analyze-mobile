import { computed, ref } from 'vue';
import axios, { AxiosError } from 'axios';
import { presentAlert } from '@/scripts/alertMsg';
import { Quote } from '@/interfaces/QuotesInterface';

interface QuoteFunction {
  [x: string]: () => Promise<void> | void
}

export const useQuote = () => {
  // state
  const quotesSelect = ref('')
  const quotesSearch = ref('')
  const quoteInfo = ref<Partial<Quote>>({})

  // computers
  const isEmptyQuoteInfo = computed(
    () => Object.values(quoteInfo.value).length === 0
  );

  // object methods
  const quotesMethods: QuoteFunction = {
    anime: async () => {
      try {
        const { data } = await axios.get<Quote>('https://api.animechan.io/v1/quotes/random', {
          params: {
            anime: quotesSearch.value
          }
        })

        quoteInfo.value = data
      } catch (err) {
        presentAlert({
          header: 'quote problem',
          subHeader: 'details',
          msg: (err as AxiosError).message
        })
      }

      quotesSelect.value = ''
      quotesSearch.value = ''
    },
    swift: async () => {
      try {
        const { data } = await axios.get<Quote>("https://taylorswiftapi.onrender.com/get");

        quoteInfo.value = data
      } catch (err) {
        presentAlert({
          header: 'quote problem',
          subHeader: 'details',
          msg: (err as AxiosError).message
        })
      }

      quotesSelect.value = ''
    },
    clearQuoteInfo: () => {
      quoteInfo.value = {}
    }
  }

  // static
  const quotesOpts = Object.keys(quotesMethods, ).slice(0, -1)

  return {
    quotesOpts, quotesSelect, quotesSearch, isEmptyQuoteInfo,
    quoteInfo, quotesMethods,
  };
};
