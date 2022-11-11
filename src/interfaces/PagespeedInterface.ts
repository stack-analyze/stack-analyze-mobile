export interface Pagespeed {
  captchaResult: string
  kind: string
  id: string
  loadingExperience: LoadingExperience
  originLoadingExperience: OriginLoadingExperience
  lighthouseResult: LighthouseResult
  analysisUTCTimestamp: string
}

export interface LoadingExperience {
  id: string
  metrics: Metrics
  overall_category: string
  initial_url: string
}

export interface Metrics {
  CUMULATIVE_LAYOUT_SHIFT_SCORE: CumulativeLayoutShiftScore
  EXPERIMENTAL_INTERACTION_TO_NEXT_PAINT: ExperimentalInteractionToNextPaint
  EXPERIMENTAL_TIME_TO_FIRST_BYTE: ExperimentalTimeToFirstByte
  FIRST_CONTENTFUL_PAINT_MS: FirstContentfulPaintMs
  FIRST_INPUT_DELAY_MS: FirstInputDelayMs
  LARGEST_CONTENTFUL_PAINT_MS: LargestContentfulPaintMs
}

export interface CumulativeLayoutShiftScore {
  percentile: number
  distributions: Distribution[]
  category: string
}

export interface Distribution {
  min: number
  max?: number
  proportion: number
}

export interface ExperimentalInteractionToNextPaint {
  percentile: number
  distributions: Distribution2[]
  category: string
}

export interface Distribution2 {
  min: number
  max?: number
  proportion: number
}

export interface ExperimentalTimeToFirstByte {
  percentile: number
  distributions: Distribution3[]
  category: string
}

export interface Distribution3 {
  min: number
  max?: number
  proportion: number
}

export interface FirstContentfulPaintMs {
  percentile: number
  distributions: Distribution4[]
  category: string
}

export interface Distribution4 {
  min: number
  max?: number
  proportion: number
}

export interface FirstInputDelayMs {
  percentile: number
  distributions: Distribution5[]
  category: string
}

export interface Distribution5 {
  min: number
  max?: number
  proportion: number
}

export interface LargestContentfulPaintMs {
  percentile: number
  distributions: Distribution6[]
  category: string
}

export interface Distribution6 {
  min: number
  max?: number
  proportion: number
}

export interface OriginLoadingExperience {
  id: string
  metrics: Metrics2
  overall_category: string
  initial_url: string
}

export interface Metrics2 {
  CUMULATIVE_LAYOUT_SHIFT_SCORE: CumulativeLayoutShiftScore2
  EXPERIMENTAL_INTERACTION_TO_NEXT_PAINT: ExperimentalInteractionToNextPaint2
  EXPERIMENTAL_TIME_TO_FIRST_BYTE: ExperimentalTimeToFirstByte2
  FIRST_CONTENTFUL_PAINT_MS: FirstContentfulPaintMs2
  FIRST_INPUT_DELAY_MS: FirstInputDelayMs2
  LARGEST_CONTENTFUL_PAINT_MS: LargestContentfulPaintMs2
}

export interface CumulativeLayoutShiftScore2 {
  percentile: number
  distributions: Distribution7[]
  category: string
}

export interface Distribution7 {
  min: number
  max?: number
  proportion: number
}

export interface ExperimentalInteractionToNextPaint2 {
  percentile: number
  distributions: Distribution8[]
  category: string
}

export interface Distribution8 {
  min: number
  max?: number
  proportion: number
}

export interface ExperimentalTimeToFirstByte2 {
  percentile: number
  distributions: Distribution9[]
  category: string
}

export interface Distribution9 {
  min: number
  max?: number
  proportion: number
}

export interface FirstContentfulPaintMs2 {
  percentile: number
  distributions: Distribution10[]
  category: string
}

export interface Distribution10 {
  min: number
  max?: number
  proportion: number
}

export interface FirstInputDelayMs2 {
  percentile: number
  distributions: Distribution11[]
  category: string
}

export interface Distribution11 {
  min: number
  max?: number
  proportion: number
}

export interface LargestContentfulPaintMs2 {
  percentile: number
  distributions: Distribution12[]
  category: string
}

export interface Distribution12 {
  min: number
  max?: number
  proportion: number
}

export interface LighthouseResult {
  requestedUrl: string
  finalUrl: string
  lighthouseVersion: string
  userAgent: string
  fetchTime: string
  environment: Environment
  runWarnings: any[]
  configSettings: ConfigSettings
  audits: Audits
  categories: Categories
  categoryGroups: CategoryGroups
  timing: Timing
  i18n: I18n
}

export interface Environment {
  networkUserAgent: string
  hostUserAgent: string
  benchmarkIndex: number
}

export interface ConfigSettings {
  emulatedFormFactor: string
  formFactor: string
  locale: string
  onlyCategories: string[]
  channel: string
}

export interface Audits {
  "largest-contentful-paint-element": LargestContentfulPaintElement
  "largest-contentful-paint": LargestContentfulPaint
  "user-timings": UserTimings
  "no-document-write": NoDocumentWrite
  "render-blocking-resources": RenderBlockingResources
  "uses-rel-preload": UsesRelPreload
  "resource-summary": ResourceSummary
  "server-response-time": ServerResponseTime
  "critical-request-chains": CriticalRequestChains
  "final-screenshot": FinalScreenshot
  "efficient-animated-content": EfficientAnimatedContent
  metrics: Metrics3
  "font-display": FontDisplay
  "uses-responsive-images": UsesResponsiveImages
  "duplicated-javascript": DuplicatedJavascript
  "full-page-screenshot": FullPageScreenshot
  "network-server-latency": NetworkServerLatency
  "mainthread-work-breakdown": MainthreadWorkBreakdown
  "uses-rel-preconnect": UsesRelPreconnect
  "uses-passive-event-listeners": UsesPassiveEventListeners
  "network-rtt": NetworkRtt
  "lcp-lazy-loaded": LcpLazyLoaded
  "modern-image-formats": ModernImageFormats
  "max-potential-fid": MaxPotentialFid
  "uses-text-compression": UsesTextCompression
  "screenshot-thumbnails": ScreenshotThumbnails
  "total-blocking-time": TotalBlockingTime
  redirects: Redirects
  "legacy-javascript": LegacyJavascript
  "speed-index": SpeedIndex
  "preload-lcp-image": PreloadLcpImage
  "main-thread-tasks": MainThreadTasks
  "third-party-facades": ThirdPartyFacades
  "non-composited-animations": NonCompositedAnimations
  "third-party-summary": ThirdPartySummary
  "offscreen-images": OffscreenImages
  "unused-css-rules": UnusedCssRules
  "script-treemap-data": ScriptTreemapData
  "layout-shift-elements": LayoutShiftElements
  "unminified-javascript": UnminifiedJavascript
  viewport: Viewport
  interactive: Interactive
  "bootup-time": BootupTime
  "no-unload-listeners": NoUnloadListeners
  "cumulative-layout-shift": CumulativeLayoutShift
  diagnostics: Diagnostics
  "uses-optimized-images": UsesOptimizedImages
  "total-byte-weight": TotalByteWeight
  "unminified-css": UnminifiedCss
  "timing-budget": TimingBudget
  "first-contentful-paint": FirstContentfulPaint
  "network-requests": NetworkRequests
  "uses-long-cache-ttl": UsesLongCacheTtl
  "dom-size": DomSize
  "unsized-images": UnsizedImages
  "unused-javascript": UnusedJavascript
  "first-meaningful-paint": FirstMeaningfulPaint
  "long-tasks": LongTasks
  "performance-budget": PerformanceBudget
}

export interface LargestContentfulPaintElement {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  displayValue: string
  details: Details
}

export interface Details {
  headings: Heading[]
  items: Item[]
  type: string
}

export interface Heading {
  itemType: string
  text: string
  key: string
}

export interface Item {
  node: Node
}

export interface Node {
  type: string
  nodeLabel: string
  lhId: string
  path: string
  selector: string
  snippet: string
  boundingRect: BoundingRect
}

export interface BoundingRect {
  bottom: number
  left: number
  right: number
  top: number
  width: number
  height: number
}

export interface LargestContentfulPaint {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  numericValue: number
  numericUnit: string
}

export interface UserTimings {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  details: Details2
}

export interface Details2 {
  items: any[]
  type: string
  headings: any[]
}

export interface NoDocumentWrite {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details3
}

export interface Details3 {
  type: string
  headings: any[]
  items: any[]
}

export interface RenderBlockingResources {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details4
  numericValue: number
  numericUnit: string
}

export interface Details4 {
  headings: any[]
  type: string
  items: any[]
  overallSavingsMs: number
}

export interface UsesRelPreload {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  details: Details5
}

export interface Details5 {
  headings: any[]
  overallSavingsMs: number
  type: string
  items: any[]
}

export interface ResourceSummary {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  displayValue: string
  details: Details6
}

export interface Details6 {
  headings: Heading2[]
  items: Item2[]
  type: string
}

export interface Heading2 {
  text: string
  key: string
  itemType: string
}

export interface Item2 {
  label: string
  requestCount: number
  transferSize: number
  resourceType: string
}

export interface ServerResponseTime {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  details: Details7
  numericValue: number
  numericUnit: string
}

export interface Details7 {
  headings: Heading3[]
  type: string
  items: Item3[]
  overallSavingsMs: number
}

export interface Heading3 {
  valueType: string
  label: string
  key: string
}

export interface Item3 {
  url: string
  responseTime: number
}

export interface CriticalRequestChains {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  details: Details8
}

export interface Details8 {
  chains: Chains
  type: string
  longestChain: LongestChain
}

export interface Chains {
  FD31624B546E421D67B132EDBC6FB619: Fd31624B546E421D67B132Edbc6Fb619
}

export interface Fd31624B546E421D67B132Edbc6Fb619 {
  request: Request
}

export interface Request {
  responseReceivedTime: number
  transferSize: number
  startTime: number
  url: string
  endTime: number
}

export interface LongestChain {
  transferSize: number
  length: number
  duration: number
}

export interface FinalScreenshot {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  details: Details9
}

export interface Details9 {
  type: string
  timing: number
  data: string
  timestamp: number
}

export interface EfficientAnimatedContent {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details10
  numericValue: number
  numericUnit: string
}

export interface Details10 {
  type: string
  overallSavingsBytes: number
  items: any[]
  headings: any[]
  overallSavingsMs: number
}

export interface Metrics3 {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  details: Details11
  numericValue: number
  numericUnit: string
}

export interface Details11 {
  type: string
  items: Item4[]
}

export interface Item4 {
  cumulativeLayoutShiftMainFrame?: number
  observedFirstVisualChangeTs?: number
  observedFirstContentfulPaintTs?: number
  observedLastVisualChange?: number
  observedCumulativeLayoutShift?: number
  observedNavigationStart?: number
  totalBlockingTime?: number
  firstMeaningfulPaint?: number
  observedTotalCumulativeLayoutShift?: number
  observedNavigationStartTs?: number
  largestContentfulPaint?: number
  observedSpeedIndexTs?: number
  observedTimeOrigin?: number
  observedDomContentLoadedTs?: number
  cumulativeLayoutShift?: number
  observedTraceEndTs?: number
  observedLastVisualChangeTs?: number
  observedDomContentLoaded?: number
  maxPotentialFID?: number
  observedFirstContentfulPaint?: number
  observedFirstMeaningfulPaintTs?: number
  observedFirstContentfulPaintAllFramesTs?: number
  speedIndex?: number
  observedLargestContentfulPaintAllFramesTs?: number
  observedFirstPaintTs?: number
  firstContentfulPaint?: number
  observedTimeOriginTs?: number
  observedLoad?: number
  observedLargestContentfulPaint?: number
  observedFirstPaint?: number
  observedFirstContentfulPaintAllFrames?: number
  totalCumulativeLayoutShift?: number
  observedSpeedIndex?: number
  interactive?: number
  observedFirstVisualChange?: number
  observedTraceEnd?: number
  observedFirstMeaningfulPaint?: number
  observedLargestContentfulPaintTs?: number
  observedCumulativeLayoutShiftMainFrame?: number
  observedLoadTs?: number
  observedLargestContentfulPaintAllFrames?: number
  lcpInvalidated?: boolean
}

export interface FontDisplay {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details12
  warnings: any[]
}

export interface Details12 {
  headings: any[]
  type: string
  items: any[]
}

export interface UsesResponsiveImages {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details13
  numericValue: number
  numericUnit: string
}

export interface Details13 {
  overallSavingsMs: number
  headings: any[]
  overallSavingsBytes: number
  items: any[]
  type: string
}

export interface DuplicatedJavascript {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details14
  numericValue: number
  numericUnit: string
}

export interface Details14 {
  overallSavingsMs: number
  items: any[]
  headings: any[]
  type: string
  overallSavingsBytes: number
}

export interface FullPageScreenshot {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  details: Details15
}

export interface Details15 {
  screenshot: Screenshot
  nodes: Nodes
  type: string
}

export interface Screenshot {
  width: number
  height: number
  data: string
}

export interface Nodes {
  "page-0-P": Page0P
  "6-3-A": N63A
  "6-4-DIV": N64Div
  "6-1-META": N61Meta
  "6-0-META": N60Meta
  "6-2-META": N62Meta
}

export interface Page0P {
  left: number
  width: number
  right: number
  top: number
  height: number
  bottom: number
}

export interface N63A {
  right: number
  width: number
  top: number
  left: number
  height: number
  bottom: number
}

export interface N64Div {
  width: number
  bottom: number
  right: number
  left: number
  height: number
  top: number
}

export interface N61Meta {
  top: number
  right: number
  left: number
  width: number
  height: number
  bottom: number
}

export interface N60Meta {
  top: number
  left: number
  width: number
  bottom: number
  right: number
  height: number
}

export interface N62Meta {
  right: number
  left: number
  height: number
  width: number
  top: number
  bottom: number
}

export interface NetworkServerLatency {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  displayValue: string
  details: Details16
  numericValue: number
  numericUnit: string
}

export interface Details16 {
  headings: any[]
  items: any[]
  type: string
}

export interface MainthreadWorkBreakdown {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  details: Details17
  numericValue: number
  numericUnit: string
}

export interface Details17 {
  headings: Heading4[]
  type: string
  items: Item5[]
}

export interface Heading4 {
  itemType: string
  key: string
  text: string
  granularity?: number
}

export interface Item5 {
  group: string
  groupLabel: string
  duration: number
}

export interface UsesRelPreconnect {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details18
  warnings: any[]
  numericValue: number
  numericUnit: string
}

export interface Details18 {
  overallSavingsMs: number
  items: any[]
  headings: any[]
  type: string
}

export interface UsesPassiveEventListeners {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details19
}

export interface Details19 {
  headings: any[]
  items: any[]
  type: string
}

export interface NetworkRtt {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  displayValue: string
  details: Details20
  numericValue: number
  numericUnit: string
}

export interface Details20 {
  type: string
  headings: any[]
  items: any[]
}

export interface LcpLazyLoaded {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface ModernImageFormats {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details21
  warnings: any[]
  numericValue: number
  numericUnit: string
}

export interface Details21 {
  overallSavingsMs: number
  items: any[]
  overallSavingsBytes: number
  headings: any[]
  type: string
}

export interface MaxPotentialFid {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  numericValue: number
  numericUnit: string
}

export interface UsesTextCompression {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details22
  numericValue: number
  numericUnit: string
}

export interface Details22 {
  headings: any[]
  overallSavingsMs: number
  type: string
  items: any[]
  overallSavingsBytes: number
}

export interface ScreenshotThumbnails {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  details: Details23
}

export interface Details23 {
  type: string
  items: Item6[]
  scale: number
}

export interface Item6 {
  data: string
  timing: number
  timestamp: number
}

export interface TotalBlockingTime {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  numericValue: number
  numericUnit: string
}

export interface Redirects {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details24
  numericValue: number
  numericUnit: string
}

export interface Details24 {
  items: any[]
  type: string
  headings: any[]
  overallSavingsMs: number
}

export interface LegacyJavascript {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details25
  numericValue: number
  numericUnit: string
}

export interface Details25 {
  overallSavingsBytes: number
  overallSavingsMs: number
  headings: any[]
  type: string
  items: any[]
}

export interface SpeedIndex {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  numericValue: number
  numericUnit: string
}

export interface PreloadLcpImage {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details26
  numericValue: number
  numericUnit: string
}

export interface Details26 {
  overallSavingsMs: number
  headings: any[]
  type: string
  items: any[]
}

export interface MainThreadTasks {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  details: Details27
}

export interface Details27 {
  items: Item7[]
  headings: Heading5[]
  type: string
}

export interface Item7 {
  startTime: number
  duration: number
}

export interface Heading5 {
  key: string
  text: string
  granularity: number
  itemType: string
}

export interface ThirdPartyFacades {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface NonCompositedAnimations {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  details: Details28
}

export interface Details28 {
  items: any[]
  type: string
  headings: any[]
}

export interface ThirdPartySummary {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface OffscreenImages {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details29
  warnings: any[]
  numericValue: number
  numericUnit: string
}

export interface Details29 {
  type: string
  overallSavingsMs: number
  headings: any[]
  items: any[]
  overallSavingsBytes: number
}

export interface UnusedCssRules {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details30
  numericValue: number
  numericUnit: string
}

export interface Details30 {
  items: any[]
  type: string
  overallSavingsBytes: number
  headings: any[]
  overallSavingsMs: number
}

export interface ScriptTreemapData {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  details: Details31
}

export interface Details31 {
  type: string
  nodes: any[]
}

export interface LayoutShiftElements {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  details: Details32
}

export interface Details32 {
  headings: any[]
  type: string
  items: any[]
}

export interface UnminifiedJavascript {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details33
  warnings: any[]
  numericValue: number
  numericUnit: string
}

export interface Details33 {
  type: string
  overallSavingsBytes: number
  overallSavingsMs: number
  headings: any[]
  items: any[]
}

export interface Viewport {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  warnings: any[]
}

export interface Interactive {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  numericValue: number
  numericUnit: string
}

export interface BootupTime {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details34
  numericValue: number
  numericUnit: string
}

export interface Details34 {
  items: any[]
  summary: Summary
  type: string
  headings: any[]
}

export interface Summary {
  wastedMs: number
}

export interface NoUnloadListeners {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
}

export interface CumulativeLayoutShift {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  details: Details35
  numericValue: number
  numericUnit: string
}

export interface Details35 {
  type: string
  items: Item8[]
}

export interface Item8 {
  totalCumulativeLayoutShift: number
  cumulativeLayoutShiftMainFrame: number
}

export interface Diagnostics {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  details: Details36
}

export interface Details36 {
  type: string
  items: Item9[]
}

export interface Item9 {
  totalTaskTime: number
  totalByteWeight: number
  mainDocumentTransferSize: number
  numTasksOver25ms: number
  numTasksOver50ms: number
  rtt: number
  numTasksOver100ms: number
  maxRtt: number
  numScripts: number
  throughput: number
  numTasksOver10ms: number
  maxServerLatency: any
  numStylesheets: number
  numRequests: number
  numFonts: number
  numTasksOver500ms: number
  numTasks: number
}

export interface UsesOptimizedImages {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details37
  warnings: any[]
  numericValue: number
  numericUnit: string
}

export interface Details37 {
  items: any[]
  overallSavingsBytes: number
  type: string
  headings: any[]
  overallSavingsMs: number
}

export interface TotalByteWeight {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  details: Details38
  numericValue: number
  numericUnit: string
}

export interface Details38 {
  items: Item10[]
  type: string
  headings: Heading6[]
}

export interface Item10 {
  totalBytes: number
  url: string
}

export interface Heading6 {
  itemType: string
  key: string
  text: string
}

export interface UnminifiedCss {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details39
  numericValue: number
  numericUnit: string
}

export interface Details39 {
  headings: any[]
  overallSavingsBytes: number
  overallSavingsMs: number
  type: string
  items: any[]
}

export interface TimingBudget {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface FirstContentfulPaint {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  numericValue: number
  numericUnit: string
}

export interface NetworkRequests {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  details: Details40
}

export interface Details40 {
  items: Item11[]
  type: string
  headings: Heading7[]
  debugData: DebugData
}

export interface Item11 {
  startTime: number
  finished: boolean
  mimeType: string
  url: string
  experimentalFromMainFrame: boolean
  protocol: string
  endTime: number
  transferSize: number
  resourceSize: number
  statusCode: number
  resourceType: string
}

export interface Heading7 {
  itemType: string
  key: string
  text: string
  granularity?: number
  displayUnit?: string
}

export interface DebugData {
  networkStartTimeTs: number
  type: string
}

export interface UsesLongCacheTtl {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  details: Details41
  numericValue: number
  numericUnit: string
}

export interface Details41 {
  summary: Summary2
  headings: any[]
  items: any[]
  type: string
}

export interface Summary2 {
  wastedBytes: number
}

export interface DomSize {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  details: Details42
  numericValue: number
  numericUnit: string
}

export interface Details42 {
  type: string
  items: Item12[]
  headings: Heading8[]
}

export interface Item12 {
  value: number
  statistic: string
  node?: Node2
}

export interface Node2 {
  boundingRect: BoundingRect2
  lhId: string
  selector: string
  nodeLabel: string
  type: string
  snippet: string
  path: string
}

export interface BoundingRect2 {
  top: number
  right: number
  bottom: number
  left: number
  width: number
  height: number
}

export interface Heading8 {
  itemType: string
  text: string
  key: string
}

export interface UnsizedImages {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  details: Details43
}

export interface Details43 {
  headings: any[]
  type: string
  items: any[]
}

export interface UnusedJavascript {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details44
  numericValue: number
  numericUnit: string
}

export interface Details44 {
  items: any[]
  headings: any[]
  type: string
  overallSavingsBytes: number
  overallSavingsMs: number
}

export interface FirstMeaningfulPaint {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  numericValue: number
  numericUnit: string
}

export interface LongTasks {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  details: Details45
}

export interface Details45 {
  type: string
  headings: any[]
  items: any[]
}

export interface PerformanceBudget {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface Categories {
  performance: Performance
}

export interface Performance {
  id: string
  title: string
  score: number
  auditRefs: AuditRef[]
}

export interface AuditRef {
  id: string
  weight: number
  group?: string
  acronym?: string
  relevantAudits?: string[]
}

export interface CategoryGroups {
  "a11y-audio-video": A11yAudioVideo
  "a11y-names-labels": A11yNamesLabels
  "a11y-color-contrast": A11yColorContrast
  "seo-crawl": SeoCrawl
  "seo-mobile": SeoMobile
  "seo-content": SeoContent
  "best-practices-ux": BestPracticesUx
  "pwa-installable": PwaInstallable
  diagnostics: Diagnostics2
  "best-practices-browser-compat": BestPracticesBrowserCompat
  "a11y-navigation": A11yNavigation
  "a11y-best-practices": A11yBestPractices
  "a11y-aria": A11yAria
  metrics: Metrics4
  "a11y-tables-lists": A11yTablesLists
  budgets: Budgets
  "pwa-optimized": PwaOptimized
  "best-practices-general": BestPracticesGeneral
  "load-opportunities": LoadOpportunities
  "best-practices-trust-safety": BestPracticesTrustSafety
  "a11y-language": A11yLanguage
}

export interface A11yAudioVideo {
  title: string
  description: string
}

export interface A11yNamesLabels {
  title: string
  description: string
}

export interface A11yColorContrast {
  title: string
  description: string
}

export interface SeoCrawl {
  title: string
  description: string
}

export interface SeoMobile {
  title: string
  description: string
}

export interface SeoContent {
  title: string
  description: string
}

export interface BestPracticesUx {
  title: string
}

export interface PwaInstallable {
  title: string
}

export interface Diagnostics2 {
  title: string
  description: string
}

export interface BestPracticesBrowserCompat {
  title: string
}

export interface A11yNavigation {
  title: string
  description: string
}

export interface A11yBestPractices {
  title: string
  description: string
}

export interface A11yAria {
  title: string
  description: string
}

export interface Metrics4 {
  title: string
}

export interface A11yTablesLists {
  title: string
  description: string
}

export interface Budgets {
  title: string
  description: string
}

export interface PwaOptimized {
  title: string
}

export interface BestPracticesGeneral {
  title: string
}

export interface LoadOpportunities {
  title: string
  description: string
}

export interface BestPracticesTrustSafety {
  title: string
}

export interface A11yLanguage {
  title: string
  description: string
}

export interface Timing {
  total: number
}

export interface I18n {
  rendererFormattedStrings: RendererFormattedStrings
}

export interface RendererFormattedStrings {
  varianceDisclaimer: string
  opportunityResourceColumnLabel: string
  opportunitySavingsColumnLabel: string
  errorMissingAuditInfo: string
  errorLabel: string
  warningHeader: string
  passedAuditsGroupTitle: string
  notApplicableAuditsGroupTitle: string
  manualAuditsGroupTitle: string
  toplevelWarningsMessage: string
  crcLongestDurationLabel: string
  crcInitialNavigation: string
  lsPerformanceCategoryDescription: string
  labDataTitle: string
  warningAuditsGroupTitle: string
  snippetExpandButtonLabel: string
  snippetCollapseButtonLabel: string
  thirdPartyResourcesLabel: string
  runtimeDesktopEmulation: string
  runtimeMobileEmulation: string
  runtimeNoEmulation: string
  runtimeSettingsBenchmark: string
  runtimeSettingsCPUThrottling: string
  runtimeSettingsDevice: string
  runtimeSettingsNetworkThrottling: string
  runtimeSettingsUANetwork: string
  runtimeUnknown: string
  dropdownCopyJSON: string
  dropdownDarkTheme: string
  dropdownPrintExpanded: string
  dropdownPrintSummary: string
  dropdownSaveGist: string
  dropdownSaveHTML: string
  dropdownSaveJSON: string
  dropdownViewer: string
  footerIssue: string
  throttlingProvided: string
  calculatorLink: string
  runtimeSettingsAxeVersion: string
  viewTreemapLabel: string
  showRelevantAudits: string
}
