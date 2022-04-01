import React from 'react';

interface Props {
	title: string;
	description: string;
	type: 'website' | 'article';
	owner: string;
	noindex: boolean;
	nofollow: boolean;
	embed: {
		image?: string;
		themeColor?: string;
	};
}

interface Options extends Exclude<Props, 'noindex' | 'nofollow'> {
	embed: {
		image: string;
		themeColor: string;
	};
}

export function useMetaData(defaultOptions: Options) {
	const MetaData: React.FC<Partial<Props> & { pathname: string }> = ({
		title,
		description,
		type,
		owner,
		noindex,
		nofollow,
		embed,
		pathname,
		children,
	}) => {
		title = title
			? `${title} | ${defaultOptions.title}`
			: defaultOptions.title;
		description = description || defaultOptions.description;
		type = type ? type : defaultOptions.type;
		embed = embed || {};

		const imageUrl = embed?.image
			? embed.image
			: defaultOptions.embed.image;

		return (
			<React.Fragment>
				<title>{title}</title>

				<meta name="description" content={description} />

				{owner ? <meta name="author" content={owner} /> : ''}

				<meta
					name="robots"
					content={`${noindex ? 'noindex' : 'index'},${
						nofollow ? 'nofollow' : 'follow'
					}`}
				/>

				{embed ? (
					<>
						<meta
							name="theme-color"
							content={
								embed?.themeColor ||
								defaultOptions.embed.themeColor
							}
						/>
						<meta property="og:site_name" content="Astzoid" />
						<meta property="og:title" content={title} />
						<meta property="og:description" content={description} />
						<meta property="og:image" content={imageUrl} />
						<meta property="og:type" content={type} />
						<meta property="og:url" content={pathname} />
						<meta name="twitter:card" content="summary" />
						<meta name="twitter:title" content={title} />
						<meta
							name="twitter:description"
							content={description}
						/>
						<meta name="twitter:image" content={imageUrl} />
					</>
				) : (
					''
				)}
				{children}
			</React.Fragment>
		);
	};

	return MetaData;
}
