export interface MagicBall {
    reading:   string;
    question:  string;
    sentiment: Sentiment;
    locale:    string;
    lucky:     boolean;
}

interface Sentiment {
    score:       number;
    comparative: number;
    calculation: any[];
    tokens:      string[];
    words:       any[];
    positive:    any[];
    negative:    any[];
}
