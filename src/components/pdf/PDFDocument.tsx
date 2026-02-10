import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import { CATEGORY_SECTIONS, USE_CASES } from "@/data/use-cases";
import type { UseCase } from "@/types/use-case";

/* ── Font Registration ─────────────────────────────────────────────── */

Font.register({
  family: "Libre Baskerville",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/librebaskerville/v14/kmKnZrc3Hgbbcjq75U4uslyuy4kn0pNeYRI4CN2V.ttf",
      fontWeight: 400,
    },
    {
      src: "https://fonts.gstatic.com/s/librebaskerville/v14/kmKiZrc3Hgbbcjq75U4uslyuy4kn0qviTjYwI8Gcw6Oi.ttf",
      fontWeight: 700,
    },
  ],
});

/* ── Brand Constants ───────────────────────────────────────────────── */

const NAVY = "#0F2B46";
const CREAM = "#F5F0EB";
const GOLD = "#C4A35A";
const CHARCOAL = "#2D2D2D";
const SLATE = "#64748B";

/* ── Step Type Colors ──────────────────────────────────────────────── */

const STEP_COLORS: Record<string, string> = {
  input: SLATE,
  ai: GOLD,
  output: NAVY,
};

/* ── StyleSheet ────────────────────────────────────────────────────── */

const styles = StyleSheet.create({
  /* Page */
  page: {
    paddingTop: 50,
    paddingBottom: 60,
    paddingHorizontal: 50,
    fontFamily: "Helvetica",
    fontSize: 10,
    color: CHARCOAL,
  },

  /* Cover */
  coverPage: {
    backgroundColor: NAVY,
    padding: 50,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  coverTitle: {
    fontFamily: "Libre Baskerville",
    fontSize: 36,
    fontWeight: 700,
    color: CREAM,
    textAlign: "center",
    marginBottom: 20,
  },
  coverGoldLine: {
    width: 60,
    height: 3,
    backgroundColor: GOLD,
    marginBottom: 20,
  },
  coverSubtitle: {
    fontFamily: "Helvetica",
    fontSize: 14,
    color: CREAM,
    opacity: 0.8,
    textAlign: "center",
    marginBottom: 12,
  },
  coverTagline: {
    fontFamily: "Helvetica",
    fontSize: 11,
    color: CREAM,
    opacity: 0.6,
    textAlign: "center",
    maxWidth: 320,
    lineHeight: 1.6,
  },
  coverAuthor: {
    fontFamily: "Helvetica",
    fontSize: 10,
    color: CREAM,
    opacity: 0.5,
    textAlign: "center",
    marginTop: 60,
  },

  /* Section Header */
  sectionHeader: {
    fontFamily: "Libre Baskerville",
    fontSize: 18,
    fontWeight: 700,
    color: NAVY,
    marginTop: 30,
    marginBottom: 6,
  },
  sectionTagline: {
    fontFamily: "Helvetica",
    fontSize: 9,
    color: SLATE,
    marginBottom: 18,
  },

  /* Card */
  card: {
    marginBottom: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: "#E5E0DB",
    borderStyle: "solid",
  },
  cardTitleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  cardTitle: {
    fontFamily: "Libre Baskerville",
    fontSize: 14,
    fontWeight: 700,
    color: NAVY,
    flex: 1,
  },
  timelineBadge: {
    backgroundColor: GOLD,
    color: NAVY,
    fontSize: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    fontWeight: 700,
  },
  cardSubtitle: {
    fontFamily: "Helvetica",
    fontSize: 10,
    fontStyle: "italic",
    color: SLATE,
    marginBottom: 10,
  },
  cardDescription: {
    fontFamily: "Helvetica",
    fontSize: 9.5,
    color: CHARCOAL,
    lineHeight: 1.5,
    marginBottom: 10,
  },

  /* Allied Context */
  alliedContext: {
    borderLeftWidth: 2,
    borderLeftColor: GOLD,
    borderLeftStyle: "solid",
    paddingLeft: 10,
    fontStyle: "italic",
    fontSize: 9,
    color: SLATE,
    lineHeight: 1.5,
    marginBottom: 12,
  },

  /* Process Flow */
  processFlowLabel: {
    fontFamily: "Libre Baskerville",
    fontSize: 10,
    fontWeight: 700,
    color: NAVY,
    marginBottom: 6,
  },
  processRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  processStep: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  processDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 6,
  },
  processLabel: {
    fontSize: 8,
    color: CHARCOAL,
    flex: 1,
  },
  processArrow: {
    fontSize: 10,
    color: SLATE,
    marginHorizontal: 4,
  },

  /* Tools */
  toolsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
    marginBottom: 10,
  },
  toolBadge: {
    fontSize: 8,
    backgroundColor: "#F0EDE8",
    color: CHARCOAL,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 3,
  },

  /* ROI */
  roiBox: {
    backgroundColor: CREAM,
    padding: 10,
    fontSize: 9,
    color: CHARCOAL,
    lineHeight: 1.4,
  },
  roiLabel: {
    fontWeight: 700,
    color: NAVY,
    fontSize: 9,
  },

  /* Page Number */
  pageNumber: {
    position: "absolute",
    bottom: 25,
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 8,
    color: SLATE,
  },
});

/* ── Card Component ────────────────────────────────────────────────── */

function UseCaseCardPDF({ uc }: { uc: UseCase }) {
  return (
    <View style={styles.card} wrap={false}>
      {/* Title row */}
      <View style={styles.cardTitleRow}>
        <Text style={styles.cardTitle}>{uc.title}</Text>
        <Text style={styles.timelineBadge}>{uc.timelineLabel}</Text>
      </View>

      {/* Subtitle */}
      <Text style={styles.cardSubtitle}>{uc.subtitle}</Text>

      {/* Description */}
      <Text style={styles.cardDescription}>{uc.description}</Text>

      {/* Allied Context */}
      <View style={styles.alliedContext}>
        <Text>{uc.alliedContext}</Text>
      </View>

      {/* How It Works */}
      <Text style={styles.processFlowLabel}>How It Works</Text>
      <View style={styles.processRow}>
        {uc.processSteps.map((step, i) => (
          <View key={i} style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
            {i > 0 && <Text style={styles.processArrow}>{"\u2192"}</Text>}
            <View style={styles.processStep}>
              <View
                style={[
                  styles.processDot,
                  { backgroundColor: STEP_COLORS[step.type] || SLATE },
                ]}
              />
              <Text style={styles.processLabel}>{step.label}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Tools */}
      <View style={styles.toolsRow}>
        {uc.tools.map((tool) => (
          <Text key={tool} style={styles.toolBadge}>
            {tool}
          </Text>
        ))}
      </View>

      {/* ROI */}
      <View style={styles.roiBox}>
        <Text>
          <Text style={styles.roiLabel}>ROI: </Text>
          {uc.roi}
        </Text>
      </View>
    </View>
  );
}

/* ── Document ──────────────────────────────────────────────────────── */

export default function PDFDocument() {
  return (
    <Document>
      {/* Cover Page */}
      <Page size="LETTER" style={styles.coverPage}>
        <Text style={styles.coverTitle}>Allied Outdoor Solutions</Text>
        <View style={styles.coverGoldLine} />
        <Text style={styles.coverSubtitle}>AI Strategy Showcase</Text>
        <Text style={styles.coverTagline}>
          10 AI-Powered Solutions to Transform Sales, Marketing &amp; Operations
        </Text>
        <Text style={styles.coverAuthor}>Prepared by Gerhard van den Heever</Text>
      </Page>

      {/* Content Pages */}
      <Page size="LETTER" style={styles.page} wrap>
        {CATEGORY_SECTIONS.map((section) => {
          const cases = USE_CASES.filter(
            (uc) => uc.timeline === section.category
          );
          return (
            <View key={section.category}>
              <Text style={styles.sectionHeader}>
                {section.label} {"\u2014"} {section.tagline}
              </Text>
              <View style={{ marginBottom: 6 }} />
              {cases.map((uc) => (
                <UseCaseCardPDF key={uc.id} uc={uc} />
              ))}
            </View>
          );
        })}

        {/* Page number on content pages */}
        <Text
          style={styles.pageNumber}
          render={({ pageNumber }) =>
            pageNumber > 1 ? `${pageNumber - 1}` : ""
          }
          fixed
        />
      </Page>
    </Document>
  );
}
