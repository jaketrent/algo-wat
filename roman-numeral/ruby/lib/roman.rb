class Roman
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

  def self.to(arabic)
    return "" if arabic == 0

    num, numeral = @@conversions.find { |entry| entry.first <= arabic }
    numeral + self.to(arabic - num)
  end

end
