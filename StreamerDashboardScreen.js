import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import colors from "./colors";

// TODO: contenu détaillé du dashboard à préciser (statistiques de lives,
// cadeaux reçus, revenus, nombre de vues, etc. — à définir par l'utilisateur)
export default function StreamerDashboardScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }}>
      <Text style={styles.title}>Dashboard</Text>

      <View style={styles.card}>
        <Text style={styles.cardLabel}>Contenu publié</Text>
        <Text style={styles.cardValue}>0 / 20 vidéos</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardLabel}>Éligibilité à la monétisation</Text>
        <Text style={styles.cardValue}>Non éligible</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardLabel}>Cadeaux reçus</Text>
        <Text style={styles.cardValue}>0 coins</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  title: { color: colors.text, fontSize: 22, fontWeight: "700", marginBottom: 20 },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  cardLabel: { color: colors.textMuted, fontSize: 13 },
  cardValue: { color: colors.primaryGreen, fontSize: 20, fontWeight: "700", marginTop: 4 },
});
