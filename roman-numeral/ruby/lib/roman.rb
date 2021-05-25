class Roman

  def self.to(arabic)
    return "" if arabic == 0

    num, numeral = @@conversions.find { |entry| entry.first <= arabic }
    numeral + to(arabic - num)
  end

  def self.from(roman, total=0)
    return total if roman == ""

    numeral = get_next_longest_sub_numeral roman
    rest = roman[numeral.length..]
    num, _numeral = @@conversions.find { |entry| entry.last === numeral }
    from rest, total + num
  end

  def self.get_next_longest_sub_numeral(roman)
    _num, numeral = @@conversions.find { |entry| roman == entry.last }
    return numeral if numeral

    self.get_next_longest_sub_numeral(roman[..-2])
  end

  @@conversions = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"]
  ]

  private_class_method :get_next_longest_sub_numeral

end
