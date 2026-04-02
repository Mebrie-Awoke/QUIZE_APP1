import { StyleSheet } from 'react-native';

/**
 * Centralized stylesheet for the RN Mastery Quiz App.
 * All shared styles live here. Import and use in screens/components.
 */
export const AppStyles = StyleSheet.create({
  // ─── Layout ───────────────────────────────────────────────────────────
  container: {
    flex: 1,
  },
  centeredFlex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowSpaced: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  // ─── Spacing & Padding ────────────────────────────────────────────────
  screenPadding: {
    padding: 24,
  },
  listContent: {
    padding: 20,
    paddingBottom: 100,
  },
  sectionHeader: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },

  // ─── Cards ────────────────────────────────────────────────────────────
  card: {
    padding: 20,
    borderRadius: 16,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  cardSmall: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  // ─── Buttons ──────────────────────────────────────────────────────────
  primaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 8,
  },
  secondaryButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
  },
  secondaryButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  actionButton: {
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // ─── Home Screen ──────────────────────────────────────────────────────
  homeContent: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  homeHeader: {
    alignItems: 'center',
    marginBottom: 40,
  },
  homeLogo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  homeTitle: {
    fontSize: 32,
    fontWeight: '800',
    marginBottom: 8,
  },
  homeSubtitle: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
    maxWidth: '80%',
  },
  tipCard: {
    marginBottom: 40,
  },
  tipHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  tipText: {
    lineHeight: 22,
  },
  actionsGap: {
    gap: 16,
  },

  // ─── Notes Screen ─────────────────────────────────────────────────────
  noteHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  noteContent: {
    marginTop: 12,
    lineHeight: 22,
  },

  // ─── Quiz Screen ──────────────────────────────────────────────────────
  quizHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  progressBg: {
    height: 4,
    width: '100%',
  },
  progressFill: {
    height: '100%',
  },
  quizScroll: {
    padding: 20,
    paddingBottom: 40,
  },
  quizCardSpacing: {
    marginVertical: 12,
  },

  // ─── Quiz Card ────────────────────────────────────────────────────────
  questionText: {
    marginBottom: 20,
    lineHeight: 28,
  },
  optionsGap: {
    gap: 12,
  },
  optionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 12,
  },
  explanationBox: {
    marginTop: 20,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
  },

  // ─── Score Screen ─────────────────────────────────────────────────────
  scoreContainer: {
    alignItems: 'center',
    padding: 30,
  },
  scoreCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  scoreMessage: {
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 26,
  },
});
