require "spec_helper"

require "roman"

describe Roman do
  cases = [
    [0, ''],
    [1, 'I'],
    [2, 'II'],
    [3, 'III'],
    [4, 'IV'],
    [5, 'V'],
    [6, 'VI'],
    [9, 'IX'],
    [10, 'X'],
    [20, 'XX'],
    [49, 'XLIX'],
    [50, 'L'],
    [90, 'XC'],
    [100, 'C'],
    [500, 'D'],
    [900, 'CM'],
    [1000, 'M'],
  ]

  describe '#to' do
    cases.each do |input, expected|
      it "converts #{input} to #{expected}" do
        expect(Roman.to(input)).to eq(expected)
      end
    end
  end

  describe '#from' do
    cases.each do |expected, input|
      it "converts #{input} to #{expected}" do
        expect(Roman.from(input)).to eq(expected)
      end
    end
  end
end
