
import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;

public class Solution {

    public List<Integer> findAnagrams(String stringToCheck, String anagram) {

        final int ALPHABET = 26;
        int sizeAnagram = anagram.length();
        int[] frequencyAnagram = new int[ALPHABET];
        int[] frequencyStringToCheck = new int[ALPHABET];
        fillFrequencyAnagram(frequencyAnagram, anagram, sizeAnagram);

        int sizeStringToCheck = stringToCheck.length();
        List<Integer> allAnagrams = new ArrayList<>();
        int startPointer = 0;

        for (int endPointer = 0; endPointer < sizeStringToCheck; endPointer++) {

            char ch = stringToCheck.charAt(endPointer);

            if (frequencyAnagram[ch - 'a'] == 0) {
                startPointer = endPointer + 1;
                frequencyStringToCheck = new int[ALPHABET];
            } else {
                frequencyStringToCheck[ch - 'a']++;
                if (endPointer - startPointer + 1 == sizeAnagram) {
                    if (Arrays.equals(frequencyStringToCheck, frequencyAnagram)) {
                        allAnagrams.add(startPointer);
                    }

                    frequencyStringToCheck[stringToCheck.charAt(startPointer) - 'a']--;
                    startPointer++;
                }
            }

        }
        return allAnagrams;
    }

    public void fillFrequencyAnagram(int[] frequencyAnagram, String anagram, int sizeAnagram) {
        for (int i = 0; i < sizeAnagram; i++) {
            frequencyAnagram[anagram.charAt(i) - 'a']++;
        }
    }
}
