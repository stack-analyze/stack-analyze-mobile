import { computed, ref } from 'vue';
import axios, { AxiosError } from 'axios';
import { presentAlert } from '@/scripts/alertMsg';
import { AnimeQuote } from '@/interfaces/QuotesInterface';

interface QuoteFunction {
  [x: string]: () => Promise<void> | void
}

export const useQuote = () => {
  // static
  const quotesOpts = ['anime']

  // state
  const quotesSelect = ref('')
  const quotesSearch = ref('')
  const quoteInfo = ref<Partial<AnimeQuote>>({})

  // computers
  const isEmptyQuoteInfo = computed(
    () => Object.values(quoteInfo.value).length === 0
  );

  // object methods
  const quotesMethods: QuoteFunction = {
    anime: async () => {
      try {
        const { data } = await axios.get<AnimeQuote>('https://api.animechan.io/v1/quotes/random', {
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
    clearQuoteInfo: () => {
      quoteInfo.value = {}
    }
  }

  return {
    quotesOpts, quotesSelect, quotesSearch, isEmptyQuoteInfo,
    quoteInfo, quotesMethods,
  };
};
