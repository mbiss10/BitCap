// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

contract Cappage {
    mapping(bytes32 => uint256) public capMap;
    mapping(address => uint256[5]) _capTimes;
    mapping(address => uint8) _capTimesEarliestIndex;

    event CapCalled(
        address indexed from,
        bytes32 indexed content,
        bool indexed NFTawarded
    );

    function _hasCapsToday(address _addr) internal view returns (bool) {
        uint256[5] memory capTimes = _capTimes[_addr];
        uint256 earliestCapTime = capTimes[_capTimesEarliestIndex[_addr]];
        return (earliestCapTime + 1 days) < block.timestamp;
    }

    function _updateCapTimes(address _addr) internal {
        uint8 earliestIndex = _capTimesEarliestIndex[_addr];
        // Update array with current timestamp in the latest slot
        _capTimes[_addr][earliestIndex] = block.timestamp;
        // Update pointer
        _capTimesEarliestIndex[_addr]++;
    }

    function callCap(bytes32 content) public {
        require(
            _hasCapsToday(msg.sender),
            "Out of caps! You can only issue 5 caps every 24 hours."
        );
        capMap[content]++;
        _updateCapTimes(msg.sender);
        emit CapCalled(msg.sender, content, false);
    }
}
