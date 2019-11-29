import idx from 'idx';
export const GenerateImage = image => {
	const IPFSFile = hash => `https://ipfs.io/ipfs/${hash}`;
	const imageipfs = idx(image, _ => _[0].contentUrl['/'])
		? IPFSFile(idx(image, _ => _[0].contentUrl['/']))
		: null;
	return imageipfs;
};

export const GenerateImagefromHash = image => `https://ipfs.io/ipfs/${image}`;

export function shortenAddress(address, num, showEnd = true) {
	if (!address) return null;
	return `${address.slice(0).slice(0, num)}...${
		showEnd ? address.slice(0).slice(-num) : ''
	}`;
}
/**
 * @method isAddress
 * @param {String} address the given HEX adress
 * @return {Boolean}
 */
export const isAddress = address => {
	if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
		return false;
	} else if (
		/^(0x)?[0-9a-f]{40}$/.test(address) ||
		/^(0x)?[0-9A-F]{40}$/.test(address)
	) {
		return true;
	} else {
		return true;
	}
};

export default {
	isAddress,
	shortenAddress
};
